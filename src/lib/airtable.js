import qs from 'qs';

async function fetchWorks({ works = [], limit = 100, offset = null } = {}) {
  const data = await fetch(
    `https://api.airtable.com/v0/app4IuhsxXqAX7tha/Work?${qs.stringify({
      view: 'List',
      pageSize: limit,
      offset
    })}`,
    {
      headers: { Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}` }
    }
  ).then((r) => r.json());

  if (!data.error) {
    // const results = data.records.map(({ id, createdTime, ...work }) => ({
    //   id,
    //   createdTime,
    //   ...work.fields
    // }));

    if (data.offset) {
      return fetchWorks({ works: works.concat(data.records), limit, offset: data.offset });
    }

    return { works: works.concat(data.records) };
  }

  return { error: data.error };
}

export async function fetchWorksReq({ limit = 100 } = {}) {
  return fetchWorks({ limit });

  // const queryString = qs.stringify({
  //   view: 'All',
  //   pageSize: limit || 10,
  //   // sort: [{ field: 'released', direction: 'desc' }],
  //   offset
  // });

  // const data = await fetch(`https://api.airtable.com/v0/app4IuhsxXqAX7tha/Work?${queryString}`, {
  //   headers: { Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}` }
  // }).then((r) => r.json());

  // if (!data.error) {
  //   const works = data.records.map(({ id, createdTime, ...work }) => ({
  //     id,
  //     createdTime,
  //     ...work.fields
  //   }));

  //   return {
  //     offset: data.offset || null,
  //     works
  //   };
  // }

  // return { error: data.error };
}
