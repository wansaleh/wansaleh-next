/* eslint-disable no-plusplus */
export default async function getSheetJSON({
  id,
  sheet = 1,
  query = '',
  useIntegers = false,
  showRows = true,
  showColumns = false
}) {
  const url = `https://spreadsheets.google.com/feeds/list/${id}/${sheet}/public/values?alt=json`;

  const data = await fetch(url).then((response) => response.json());

  const responseObj = {};
  const rows = [];
  const columns = {};

  if (data && data.feed && data.feed.entry) {
    for (let i = 0; i < data.feed.entry.length; i++) {
      const entry = data.feed.entry[i];
      const keys = Object.keys(entry);
      const newRow = {};
      let queried = false;
      for (let j = 0; j < keys.length; j++) {
        const gsxCheck = keys[j].indexOf('gsx$');
        if (gsxCheck > -1) {
          const key = keys[j];
          const name = key.substring(4);
          const content = entry[key];
          let value = String(content.$t).trim();
          if (value.toLowerCase().indexOf(query.toLowerCase()) > -1) {
            queried = true;
          }
          if (useIntegers === true && !Number.isNaN(value)) {
            value = Number(value);
          }
          newRow[name] = value;
          if (queried === true) {
            // eslint-disable-next-line no-prototype-builtins
            if (!columns.hasOwnProperty(name)) {
              columns[name] = [];
              columns[name].push(value);
            } else {
              columns[name].push(value);
            }
          }
        }
      }
      if (queried === true) {
        rows.push(newRow);
      }
    }
    if (showColumns === true) {
      responseObj.columns = columns;
    }
    if (showRows === true) {
      responseObj.rows = rows;
    }

    return responseObj;
  }

  return null;
}