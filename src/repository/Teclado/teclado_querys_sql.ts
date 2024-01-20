export const SQL_TECLADO = {
    TODO: 'SELECT te.id, de.dispositivo_entrada, de.marca FROM teclado te INNER JOIN dispositivo_entrada de ON te.fk_dispositivo_entrada = de.id_dispositivo_entrada',
    BUSCAR: 'SELECT te.id, de.id_dispositivo_entrada, de.dispositivo_entrada, de.marca FROM teclado te INNER JOIN dispositivo_entrada de ON te.fk_dispositivo_entrada = de.id_dispositivo_entrada WHERE te.id = $1',
    ASOCIADO: 'SELECT COUNT(tec.id) \
    FROM computadora com \
    INNER JOIN teclado tec ON com.fk_teclado = tec.id \
    WHERE tec.id = $1;',
    // utilizando una cláusula WITH (common table expression o CTE)
    CREAR: 'WITH nuevo_dispositivo AS ( \
        INSERT INTO dispositivo_entrada ("dispositivo_entrada", "marca") \
        VALUES ($1, $2) \
        RETURNING "id_dispositivo_entrada" \
        )\
        INSERT INTO teclado (fk_dispositivo_entrada)\
        SELECT id_dispositivo_entrada FROM nuevo_dispositivo\
        RETURNING id;',

    ACTUALIZAR: 'UPDATE dispositivo_entrada SET dispositivo_entrada = $2, marca = $3 FROM teclado WHERE teclado.id = $1 AND  dispositivo_entrada.id_dispositivo_entrada = teclado.fk_dispositivo_entrada RETURNING id;',
    BORRAR: 'DELETE FROM teclado WHERE id = $1',
}