const fetch = global.fetch || require('node-fetch');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function http(path, opts = {}){
  const url = `http://localhost:3000${path}`;
  try{
    const res = await fetch(url, opts);
    const text = await res.text();
    let body = text;
    try { body = JSON.parse(text); } catch(e){}
    return { status: res.status, body };
  }catch(e){
    return { error: e.message };
  }
}

(async ()=>{
  console.log('\n=== SMOKE TEST START ===');

  console.log('\n1) GET / (root)');
  console.log(await http('/'));

  console.log('\n2) CREATE Categoria POST /api/categorias');
  const createCat = await http('/api/categorias', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome: 'Categoria Teste', descricao: 'Criada por smoke script' })
  });
  console.log(createCat);

  console.log('\n3) GET /api/categorias');
  console.log(await http('/api/categorias'));

  console.log('\n4) DB: listar categorias via Prisma');
  console.log(await prisma.categoria.findMany());

  const categorias = await prisma.categoria.findMany();
  if(categorias.length === 0){
    console.error('\n=> Nenhuma categoria encontrada no DB após POST. API não gravou.');
    await prisma.$disconnect();
    process.exit(1);
  }

  const categoriaId = categorias[0].id;

  console.log('\n5) CREATE Prato POST /api/pratos');
  const createPrato = await http('/api/pratos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome: 'Prato Teste', preco: 12.5, descricao: 'Criado por smoke', categoriaId })
  });
  console.log(createPrato);

  console.log('\n6) GET /api/pratos');
  console.log(await http('/api/pratos'));

  console.log('\n7) DB: listar pratos via Prisma');
  console.log(await prisma.prato.findMany());

  const pratos = await prisma.prato.findMany();
  if(pratos.length === 0){
    console.error('\n=> Nenhum prato encontrado no DB após POST. API não gravou.');
    await prisma.$disconnect();
    process.exit(1);
  }

  const pratoId = pratos[0].id;

  console.log('\n8) CREATE Pedido POST /api/pedidos');
  const createPedido = await http('/api/pedidos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cliente: 'Cliente Teste', quantidade: 2, pratoId })
  });
  console.log(createPedido);

  console.log('\n9) GET /api/pedidos');
  console.log(await http('/api/pedidos'));

  console.log('\n10) DB: listar pedidos via Prisma');
  console.log(await prisma.pedido.findMany());

  await prisma.$disconnect();
  console.log('\n=== SMOKE TEST END ===');
})();