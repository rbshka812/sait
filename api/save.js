import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const { fio, phone } = req.body;
  const line = `${new Date().toISOString()} | ${fio} | ${phone}\n`;
  const filePath = path.join(process.cwd(), 'data.txt');

  try {
    fs.appendFileSync(filePath, line, 'utf8');
    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: 'Ошибка записи' });
  }
}