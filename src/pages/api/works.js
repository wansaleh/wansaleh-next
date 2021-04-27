import { fetchDiscograpySheet } from '../../lib/sheet';

export default async function handler(req, res) {
  const works = await fetchDiscograpySheet();

  res.status(200).json(works);
}
