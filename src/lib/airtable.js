import camelcaseKeys from 'camelcase-keys';
import qs from 'qs';

export async function fetchWorks({ works = [], limit = 100, offset = null } = {}) {
  const data = await fetch(
    `https://api.airtable.com/v0/app4IuhsxXqAX7tha/Works?${qs.stringify({
      view: 'Website',
      pageSize: limit,
      offset
    })}`,
    {
      headers: { Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}` }
    }
  ).then((r) => r.json());

  if (!data.error) {
    const records = data.records.map((record) => {
      record.fields = camelcaseKeys(record.fields);
      return record;
    });

    if (data.offset) {
      return fetchWorks({ works: works.concat(records), limit, offset: data.offset });
    }

    return { works: works.concat(records) };
  }

  return { error: data.error };
}
