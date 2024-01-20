export const SQL_ORDEN = {
    TODO: "SELECT ord.id_orden, ord.cantidad, \
    jsonb_object(array['idComputadora',pc.id_computadora,'nombre',pc.nombre,'precio',CAST(pc.precio AS DECIMAL),'monitor',jsonb_build_object('idMonitor',mon.id_monitor,'marca',mon.marca,'tamanno',mon.tamanno,'foto_publica_monitor',mon.foto_publica_monitor,'base_64_monitor',mon.base_64_monitor),'teclado',jsonb_build_object('id',tec.id,'marca',de_teclado.marca,'dispositivoEntrada',de_teclado.dispositivo_entrada),'raton',jsonb_build_object('id',rat.id,'dispositivoEntrada',de_raton.dispositivo_entrada,'marca',de_raton.marca),'publicoFotoComputadora',pc.publico_foto_computadora,'base64Computadora',pc.base_64_computadora]::TEXT[]) AS computadoras, \
    jsonb_object(array['idComprador',com.id_comprador,'primerNombre',com.primer_nombre,'segundoNombre',com.segundo_nombre,'primerApellido',com.primer_apellido,'segundoApellido',com.segundo_apellido,'documento',com.documento,'nombreFoto',com.nombre_foto,'base64Comprador',com.base_64_comprador]::TEXT[]) AS comprador \
    FROM orden ord \
    INNER JOIN computadora pc ON ord.fk_computadora = pc.id_computadora \
    INNER JOIN comprador com ON ord.fk_comprador = com.id_comprador \
	INNER JOIN monitor mon ON pc.fk_monitor = mon.id_monitor \
	INNER JOIN raton rat ON pc.fk_raton = rat.id \
	INNER JOIN teclado tec ON pc.fk_teclado = tec.id \
	INNER JOIN dispositivo_entrada de_raton ON rat.fk_dispositivo_entrada = de_raton.id_dispositivo_entrada \
	INNER JOIN dispositivo_entrada de_teclado ON tec.fk_dispositivo_entrada = de_teclado.id_dispositivo_entrada \
    ORDER BY ord.id_orden;",
    BUSCAR: "SELECT ord.id_orden, ord.cantidad, \
    jsonb_object(array['idComputadora',pc.id_computadora,'nombre',pc.nombre,'precio',CAST(pc.precio AS DECIMAL),'monitor',jsonb_build_object('idMonitor',mon.id_monitor,'marca',mon.marca,'tamanno',mon.tamanno,'foto_publica_monitor',mon.foto_publica_monitor,'base_64_monitor',mon.base_64_monitor),'teclado',jsonb_build_object('id',tec.id,'marca',de_teclado.marca,'dispositivoEntrada',de_teclado.dispositivo_entrada),'raton',jsonb_build_object('id',rat.id,'dispositivoEntrada',de_raton.dispositivo_entrada,'marca',de_raton.marca),pc.publico_foto_computadora,'base64Computadora',pc.base_64_computadora]::TEXT[]) AS computadoras, \
    jsonb_object(array['idComprador',com.id_comprador,'primerNombre',com.primer_nombre,'segundoNombre',com.segundo_nombre,'primerApellido',com.primer_apellido,'segundoApellido',com.segundo_apellido,'documento',com.documento,'nombreFoto',com.nombre_foto,'base64Comprador',com.base_64_comprador]::TEXT[]) AS comprador \
    FROM orden ord \
    INNER JOIN computadora pc ON ord.fk_computadora = pc.id_computadora \
    INNER JOIN comprador com ON ord.fk_comprador = com.id_comprador \
	INNER JOIN monitor mon ON pc.fk_monitor = mon.id_monitor \
	WHERE com.id_comprador = $1 \
    ORDER BY ord.id_orden",
    CREAR: 'INSERT into orden (cantidad,fk_computadora,fk_comprador) VALUES($1,$2,$3) RETURNING id_orden;',
    ACTUALIZAR: 'UPDATE orden SET cantidad = $2,fk_computadora = $3,fk_comprador = $4 WHERE orden.id_orden = $1 RETURNING id_orden;',
    BORRAR: 'DELETE FROM orden WHERE id_orden = $1',
};