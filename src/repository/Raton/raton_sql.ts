export const SQL_RATON = {
    TODO: 'SELECT ra.id, de.marca, de.dispositivo_entrada FROM raton ra INNER JOIN dispositivo_entrada de ON ra.fk_dispositivo_entrada = de.id_dispositivo_entrada',
    BUSCAR: "SELECT ra.id,de.id_dispositivo_entrada, de.dispositivo_entrada,de.marca \
    FROM raton ra\
    INNER JOIN dispositivo_entrada de ON ra.fk_dispositivo_entrada = de.id_dispositivo_entrada WHERE ra.id = $1",
    ASOCIADO: 'SELECT COUNT(ra.id) \
    FROM computadora com \
    INNER JOIN raton ra ON com.fk_ralado = ra.id \
    WHERE ra.id = $1;',
    // utilizando una cláusula WITH (commON table expressiON o Cra)
    CREAR:'WITH nuevo_dispositivo AS ( \
        INSERT INTO dispositivo_entrada ("dispositivo_entrada", "marca") \
        VALUES ($1, $2) \
        RETURNING "id_dispositivo_entrada" \
        )\
        INSERT INTO raton (fk_dispositivo_entrada)\
        SELECT id_dispositivo_entrada FROM nuevo_dispositivo\
        RETURNING id;',

    ACTUALIZAR: 'UPDATE dispositivo_entrada SET dispositivo_entrada = $2, marca = $3 FROM raton WHERE raton.id = $1 AND  dispositivo_entrada.id_dispositivo_entrada = raton.fk_dispositivo_entrada RETURNING raton.id',
    BORRAR: 'DELETE FROM raton WHERE id = $1',
};