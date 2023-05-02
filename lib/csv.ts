import csv from 'csv-parser'
import fs from 'fs'
import Artwork from '../interfaces/artwork'

/**
 * Function to get filtered rows from a large CSV file if the validate function passes.
 *
 * @param {string} filePath - The path to the CSV file.
 * @param {function} validate - A validate function to return true or false for each row
 * @returns {Promise<Artwork[]>} - A promise that resolves to an array of Artwork objects.
 */
export async function getRowsBySearch(
  filePath: string,
  validate: (row: any) => boolean
) {
  const validatedRows: any[] = []
  return new Promise((resolve, reject) => {
    return fs
      .createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        if (validate(row)) {
          validatedRows.push(row)
        }
      })
      .on('end', () => {
        resolve(validatedRows)
      })
      .on('error', (error) => {
        reject(error)
      })
  })
}

/**
 * Function to get n random rows from a large CSV file and return them as JSON.
 *
 * @param {string} filePath - The path to the CSV file.
 * @param {number} n - The number of rows to return.
 * @returns {Promise<Artwork[]>} - A promise that resolves to an array of Artwork objects.
 */
export async function getRandomRowsAsJSON(
  filePath: string,
  n: number
): Promise<Artwork[]> {
  const rows: Artwork[] = [] // array to hold the n rows
  let currentLine = 0 // variable to keep track of the current line being read

  return new Promise((resolve, reject) => {
    // create a readable stream from the CSV file and parse it into JSON objects
    const stream = fs.createReadStream(filePath).pipe(csv())

    // process each row as it is read
    stream.on('data', (row: Artwork) => {
      currentLine++ // increment the current line count for this row

      if (!row.ThumbnailURL) {
        return
      }
      // use the reservoir sampling algorithm to randomly choose which rows to keep
      if (currentLine <= n) {
        // if we haven't chosen n rows yet, add this one to the array
        rows.push(row)
      } else {
        const rand = Math.floor(Math.random() * currentLine)
        if (rand < n) {
          // if the random number is less than n, replace the row at that index with this one
          rows[rand] = row
        }
      }
    })

    // wait for the stream to end before returning the result
    stream.on('end', () => {
      resolve(rows)
    })

    // handle any errors that occur while reading the file
    stream.on('error', (error) => {
      reject(error)
    })
  })
}
