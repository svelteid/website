import fetch from 'isomorphic-fetch';
import { query, paginatedQuery } from '@intrnl/svelte-query';
import { BASE_URL, TOKEN, ORGANIZATION_ID } from '../constants/eventbrite';

async function get(endpoint, params) {
  try {
    const uriParams = new URLSearchParams(params).toString();
    const uri = `${BASE_URL}${endpoint}/?${uriParams}`;
    const options = {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    };

    const response = await fetch(uri, options);

    if (!response.ok) {
      throw new Error('Terjadi kesalahan saat meminta data');
    }

    return response.json();
  } catch (error) {
    return Promise.reject(error);
  }
}

export function getListEvent(offset = 1, limit = 15) {
  const fetcher = (_, page, page_size) => {
    return get(`/organizations/${ORGANIZATION_ID}/events`, {
      page,
      page_size,
      order_by: 'start_desc',
      status: 'live,started,ended'
    });
  };

  return paginatedQuery(['events', offset, limit], fetcher);
}

export function getStructuredEvent(eventId) {
  const fetcher = (_, id) => {
    return get(`/events/${id}/structured_content`, {
      purpose: 'digital_content'
    });
  };

  return query(['structureEvent', eventId], fetcher, { enabled: !!eventId });
}
