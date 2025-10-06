const clienteService = require('../services/cliente.service');

exports.getAll = async (req, res) => {
    try {
        const clientes = await clienteService.getAllClientes();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getById = async (req, res) => {
    try {
        const cliente = await clienteService.getClienteById(req.params.id);
        if (!cliente) return res.status(404).json({ error: 'Cliente não encontrado' });
        res.status(200).json(cliente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.create = async (req, res) => {
    try {
        const novoCliente = await clienteService.createCliente(req.body);
        res.status(201).json(novoCliente);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const clienteAtualizado = await clienteService.updateCliente(req.params.id, req.body);
        res.status(200).json(clienteAtualizado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.remove = async (req, res) => {
    try {
        await clienteService.deleteCliente(req.params.id);
        res.status(200).json({ message: 'Cliente removido com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
