import { fetchDiscograpySheet } from '../../lib/google-sheet-helpers';

export default async function handler(req, res) {
  const works = await fetchDiscograpySheet();

  res.status(200).json(works);
}
