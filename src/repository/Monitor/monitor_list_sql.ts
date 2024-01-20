export const SQL_MONITOR = {
    ALL: 'SELECT * from monitor;',
    BUSCAR:'SELECT * from monitor mon where mon.id_monitor = $1;',
    ASOCIADO: 'SELECT COUNT(mon.id_monitor) \
    FROM computadora com \
    INNER JOIN monitor mon ON com.fk_monitor = mon.id_monitor \
    WHERE mon.id_monitor = $1;',
    CREAR:'INSERT INTO monitor (marca,tamanno,foto_publica_monitor,base_64_monitor) VALUES($1,$2,$3,$4) RETURNING id_monitor;',
    ACTUALIZAR:'UPDATE monitor SET marca = $2,tamanno = $3, foto_publica_monitor = $4, base_64_monitor = $5 WHERE monitor.id_monitor = $1 RETURNING id_monitor;',
    BORRAR:'DELETE FROM monitor WHERE id_monitor = $1'
};