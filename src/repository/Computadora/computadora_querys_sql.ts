export const SQL_COMPUTADORA = {
	TODO: "SELECT com.id_computadora,com.nombre, CAST(com.precio AS DECIMAL), \
	jsonb_object(array['idMonitor',mon.id_monitor,'marca',mon.marca,'tamanno',mon.tamanno]::TEXT[]) AS monitor, \
	jsonb_object(array['id',rat.id,'marca',de_raton.marca,'dispositivoEntrada',de_raton.dispositivo_entrada]::TEXT[]) AS raton, \
	jsonb_object(array['id',tec.id,'marca',de_teclado.marca,'dispositivoEntrada',de_teclado.dispositivo_entrada]::TEXT[]) AS teclado, \
	com.publico_foto_computadora, com.base_64_computadora \
	FROM computadora com \
	INNER JOIN monitor mon ON com.fk_monitor = mon.id_monitor \
	INNER JOIN raton rat ON com.fk_raton = rat.id \
	INNER JOIN teclado tec ON com.fk_teclado = tec.id \
	INNER JOIN dispositivo_entrada de_raton ON rat.fk_dispositivo_entrada = de_raton.id_dispositivo_entrada \
	INNER JOIN dispositivo_entrada de_teclado ON tec.fk_dispositivo_entrada = de_teclado.id_dispositivo_entrada \
	ORDER BY com.id_computadora ASC",
	BUSCAR: "SELECT com.id_computadora,com.nombre, CAST(com.precio AS DECIMAL), \
	jsonb_object(array['idMonitor',mon.id_monitor,'marca',mon.marca,'tamanno',mon.tamanno]::TEXT[]) AS monitor, \
	jsonb_object(array['id',rat.id,'marca',de_raton.marca,'dispositivoEntrada',de_raton.dispositivo_entrada]::TEXT[]) AS raton, \
	jsonb_object(array['id',tec.id,'marca',de_teclado.marca,'dispositivoEntrada',de_teclado.dispositivo_entrada]::TEXT[]) AS teclado, \
	com.publico_foto_computadora, com.base_64_computadora \
	FROM computadora com \
	INNER JOIN monitor mon ON com.fk_monitor = mon.id_monitor \
	INNER JOIN raton rat ON com.fk_raton = rat.id \
	INNER JOIN teclado tec ON com.fk_teclado = tec.id \
	INNER JOIN dispositivo_entrada de_raton ON rat.fk_dispositivo_entrada = de_raton.id_dispositivo_entrada \
	INNER JOIN dispositivo_entrada de_teclado ON tec.fk_dispositivo_entrada = de_teclado.id_dispositivo_entrada \
	WHERE com.id_computadora = $1;",
	CREAR: 'INSERT INTO computadora (nombre,fk_monitor,fk_teclado,fk_raton,publico_foto_computadora,base_64_computadora,precio) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING id_computadora;',
	ACTUALIZAR: 'UPDATE computadora SET nombre = $2,fk_monitor =$3, fk_teclado = $4,fk_raton = $5,publico_foto_computadora = $6,base_64_computadora = $7,precio =$8 WHERE computadora.id_computadora = $1 RETURNING id_computadora;',
	BORRAR: 'DELETE FROM computadora WHERE id_computadora = $1;',
};