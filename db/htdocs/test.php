<?php


$sql = new DbQuery();
		// Build SELECT
		$sql->select('*');
		// Build FROM
		$sql->from('actions');
		$action = Db::getInstance()->executeS($sql);

        echo $action;
        echo 'test';
        ?>