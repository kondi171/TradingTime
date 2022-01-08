<?php


namespace restapi\v1;

use Db;
use restapi\Route;
use restapi\Database\DbQuery;
use restapi\Product\Product as ProductObject;
use restapi\Util\ArrayUtils;
use restapi\Validate;

class Action extends Route {

	public function getActions() {
		$api = $this->api;
	//	$data="2021-07-12";
		$data=date("Y-m-d");
		$czas=date("Y-m-d H");
		$godzina=date("H");
		if($godzina>='17'){
		$czas=date("Y-m-d 17");
	}
//	$czas="2021-07-12 17";
		// Build query
		$sql = new DbQuery();
		// Build SELECT
		$sql='SELECT
		tah.id_action, 
		tah.value, 
		actions.symbol, 
		actions.image, 
		tah.volume, 
		tah.actionDate, 
		cah.closeValue, 
		cah.openValue, 
		cah.closeActionDate
	FROM 
		today_actions_history tah
	
	INNER JOIN actions ON tah.id_action = actions.id_action
	
	INNER JOIN close_actions_history cah ON tah.id_action = cah.id_action
	
	INNER JOIN (SELECT id_action, MAX(actionDate) AS MaxDateTime FROM today_actions_history GROUP BY id_action) groupedtah ON tah.id_action = groupedtah.id_action AND tah.actionDate = groupedtah.MaxDateTime 
	
	INNER JOIN (SELECT id_action, MAX(closeActionDate) AS MaxDateTime FROM close_actions_history GROUP BY id_action) groupedcah ON cah.id_action = groupedcah.id_action AND cah.closeActionDate = groupedcah.MaxDateTime';
		$actions = Db::getInstance()->executeS($sql);
		$ulubiona="ulubiona";
	

		return $api->response([
			'success' => true,
			'actions' => $actions,
			'czas' => $czas,
		]);
	}

	

	public function getAction( $ActionId ) {
		$api = $this->api;

		
        $sql = new DbQuery();
        $sql->select('actions.*,today_actions_history.actionDate,today_actions_history.value,today_actions_history.volume');
		// Build FROM
		$sql->from('actions', 'actions');
		
		$sql->innerJoin('today_actions_history' ,'today_actions_history', 'actions.id_action=today_actions_history.id_action');
        $where_clause = array();
        $where_clause[] = 'actions.id_action =  '. pSQL($ActionId) .' ';
        $where_clause = implode( $where_clause);
        $sql->where($where_clause);
		$action = Db::getInstance()->executeS($sql);
		$sql = new DbQuery();
        $sql->select('actions.*,close_actions_history.closeActionDate,close_actions_history.openValue,close_actions_history.closeValue,close_actions_history.volume');
		// Build FROM
		$sql->from('actions', 'actions');
		$sql->innerJoin('close_actions_history' ,'close_actions_history', 'actions.id_action=close_actions_history.id_action');
		
        $where_clause = array();
        $where_clause[] = 'actions.id_action =  '. pSQL($ActionId) .' ';
        $where_clause = implode( $where_clause);
        $sql->where($where_clause);
		$action2 = Db::getInstance()->executeS($sql);

        return $api->response([
			'success' => true,
			'todayValues' => $action,
			'pastValues' => $action2
		]);
		
		
	}

	

	
	
	
}


