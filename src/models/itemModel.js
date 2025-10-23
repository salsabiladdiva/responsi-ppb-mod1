const { supabase } = require('../config/supabaseClient');

const ItemModel = {
  async getAll(status) {
    let query = supabase.from('items').select('*').order('id', { ascending: true });
    if (status) query = query.eq('status', status);
    const { data, error } = await query;
    if (error) throw error;
    return data;
  },

  async getById(id) {
    const { data, error } = await supabase.from('items').select('*').eq('id', id).single();
    if (error) throw error;
    return data;
  },

  async create(payload) {
    const { data, error } = await supabase.from('items').insert([payload]).select().single();
    if (error) throw error;
    return data;
  },

  async update(id, payload) {
    const { data, error } = await supabase.from('items').update(payload).eq('id', id).select().single();
    if (error) throw error;
    return data;
  },

  async remove(id) {
  const { data, error } = await supabase
    .from('items')
    .delete()
    .eq('id', parseInt(id))
    .select();

  if (error) throw error;
  if (!data || data.length === 0) {
    throw new Error('Item not found or already deleted');
  }

  return { message: 'Deleted successfully', deleted: data[0] };
}
};

module.exports = { ItemModel };
