import { fetchWorksReq } from '../../../lib/airtable';

export default async function handler(req, res) {
  res.status(200).json(await fetchWorksReq(req.query));
}
