import qs from 'qs';

export default async function fetchDiscographyAirtable(reqQuery = {}) {
  const query = qs.stringify({
    view: 'All',
    pageSize: reqQuery.limit || 100,
    // sort: [{ field: 'released', direction: 'desc' }],
    offset: reqQuery.offset
  });

  const data = await fetch(`https://api.airtable.com/v0/app4IuhsxXqAX7tha/Work?${query}`, {
    headers: { Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}` }
  }).then((r) => r.json());

  if (!data.error) {
    const works = data.records.map(({ id, createdTime, ...work }) => ({
      id,
      createdTime,
      ...work.fields
    }));

    const _artists = [...new Set(...works.map((work) => work.artists))];

    const artists = _artists.map((art) => ({
      slug: art.toLowerCase().replace(/ /g, '-'),
      name: art,
      total: works.filter((work) => work.artists.includes(art)).length
    }));

    return { offset: data.offset || null, works, artists };
  }
  return { error: data.error };
}
