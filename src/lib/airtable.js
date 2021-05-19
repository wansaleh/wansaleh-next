import qs from 'qs';

export async function fetchWorks({ works = [], limit = 100, offset = null } = {}) {
  const data = await fetch(
    `https://api.airtable.com/v0/app4IuhsxXqAX7tha/Works?${qs.stringify({
      view: 'ShowOnSite',
      pageSize: limit,
      offset
    })}`,
    {
      headers: { Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}` }
    }
  ).then((r) => r.json());

  if (!data.error) {
    if (data.offset) {
      return fetchWorks({ works: works.concat(data.records), limit, offset: data.offset });
    }

    return { works: works.concat(data.records) };
  }

  return { error: data.error };
}
