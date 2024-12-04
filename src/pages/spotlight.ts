import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ redirect }) => {
  return redirect('https://docs.google.com/forms/d/e/1FAIpQLSelI6FSqpn6skCz3K7RffeFZ62O5IoNakAme9bJgtV47hTEgw/viewform', 301);
}