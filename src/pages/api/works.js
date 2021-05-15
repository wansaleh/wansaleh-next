import mapKeys from 'lodash.mapkeys';

export default async function handler(req, res) {
  // console.log(req.query.offset);
  const data = await fetch(
    `https://api.airtable.com/v0/app4IuhsxXqAX7tha/Works?pageSize=100&view=Main&sort[0][field]=Released&sort[0][direction]=desc${
      req.query.offset ? `&offset=${req.query.offset}` : ''
    }`,
    {
      headers: { Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}` }
    }
  ).then((r) => r.json());

  const records = data.records.map(({ id, createdTime, ...work }) =>
    mapKeys(
      {
        id,
        createdTime,
        ...work.fields
      },
      (v, k) => k.toLowerCase()
    )
  );

  res.status(200).json({ offset: data.offset, records });
}
