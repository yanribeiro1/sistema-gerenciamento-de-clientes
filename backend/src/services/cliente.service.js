const supabase = require('../db/supabase');

exports.getAllClientes = async () => {
    const { data, error } = await supabase.from('clientes').select('*');
    if (error) throw error;
    return data;
};

exports.getClienteById = async (id) => {
    const { data, error } = await supabase.from('clientes').select('*').eq('id', id).single();
    if (error) throw error;
    return data;
};

exports.createCliente = async (cliente) => {
    const { data, error } = await supabase.from('clientes').insert([cliente]).select().single();
    if (error) throw error;
    return data;
};

exports.updateCliente = async (id, cliente) => {
    const { data, error } = await supabase.from('clientes').update(cliente).eq('id', id).select().single();
    if (error) throw error;
    return data;
};

exports.deleteCliente = async (id) => {
    const { data, error } = await supabase.from('clientes').delete().eq('id', id);
    if (error) throw error;
    return data;
};