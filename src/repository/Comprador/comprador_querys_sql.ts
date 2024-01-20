export const SQL_COMPRADOR = {
    TODO: 'select * from comprador',
    BUSCAR: 'select * from comprador co where co.id_comprador = $1;',
    CREAR: 'insert into comprador (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, documento, nombre_foto, base_64_comprador) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING id_comprador',
    ACTUALIZAR: 'update comprador SET primer_nombre = $2, segundo_nombre = $3, primer_apellido = $4, segundo_apellido = $5, documento = $6, nombre_foto = $7, base_64_comprador = $8 WHERE comprador.id_comprador = $1 RETURNING id_comprador',
    BORRAR: 'DELETE FROM comprador WHERE id_comprador = $1',
};