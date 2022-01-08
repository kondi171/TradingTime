<?php


namespace restapi\v1;

use Db;
use restapi\Route;
use restapi\Database\DbQuery;
use restapi\Product\Product as ProductObject;
use restapi\Util\ArrayUtils;
use restapi\Validate;

class Wallet extends Route {

	

	

    public function getWallet($UserId) {
		$api = $this->api;
        $sql = new DbQuery();
        $sql->select('user_settings.simulationMode');
		// Build FROM
		$sql->from('users','users');
      
        $sql->innerJoin('user_settings' ,'user_settings', 'user_settings.id_user_settings=users.id_user_settings');
        $where_clause[] = 'users.id_user = '.pSQL($UserId).'';
        $where_clause = implode( $where_clause);
       $sql->where($where_clause);
		$userSetWallet = Db::getInstance()->executeS($sql);
        $setWallet=implode(" ",$userSetWallet[0]);
        if($setWallet="0"){
        $sql = new DbQuery();
        $sql->select('wallets.accountBalance');
		// Build FROM
		$sql->from('wallets');
        $sql->innerJoin('users' ,'users', 'users.id_virtual_wallet=wallets.id_wallet');
       
       
        $sql->where($where_clause);
		$accountBalance = Db::getInstance()->executeS($sql);
        }
        if($setWallet="1"){
            $sql = new DbQuery();
            $sql->select('wallets.accountBalance');
            // Build FROM
            $sql->from('wallets');
            $sql->innerJoin('users' ,'users', 'users.id_wallet=wallets.id_wallet');
           
           
            $sql->where($where_clause);
            $accountBalance = Db::getInstance()->executeS($sql);
            }
            if(!$setWallet="1"&&!$setWallet="0" )
            {
                $accountBalance="0";
            }

       $setAccountBalance=implode(" ",$accountBalance[0]);
        return $api->response([
			'success' => true,
      
            'accountBalance' => $setAccountBalance,
      
			
		]);
		
		
	}

    
    public function getFavourite($UserId) {
		$api = $this->api;
        $sql = new DbQuery();
        $sql->select('actions.*');
		// Build FROM
		$sql->from('users','users');
      
        $sql->innerJoin('favourite_actions' ,'favourite_actions', 'favourite_actions.id_user=users.id_user');
        $sql->innerJoin('actions' ,'actions', 'actions.id_action=favourite_actions.id_action');

        $where_clause[] = 'users.id_user = '.pSQL($UserId).'';
        $where_clause = implode( $where_clause);
       $sql->where($where_clause);
		$userfavourite = Db::getInstance()->executeS($sql);
        
        
        return $api->response([
			'success' => true,
            
            'favouriteAction' => $userfavourite,
      
			
		]);
		
		
	}

    public function addFavourite($UserId,$idaction) {
		$api = $this->api;
        $sql = new DbQuery();
   
        $sql = 'SELECT COUNT(id_favourite_action) FROM `favourite_actions` WHERE `id_user`=\''.pSQL($UserId).'\' and `id_action`=\''.pSQL($idaction).'\'';
        

        
        $serch = Db::getInstance()->executes($sql);
        $prasSerch=implode(" ",(array)$serch[0]);

        if($prasSerch=='0'){
        $sql='INSERT INTO favourite_actions (id_user,id_action)VALUES('.pSQL($UserId).','.pSQL($idaction).')';
		// Build FROM
		
        
		$userfavourite = Db::getInstance()->execute($sql);
        
        
        return $api->response([
			'success' => true,
      
            'favouriteAction' => $userfavourite,
        ]);
        }
        return $api->response([
        'error' => $prasSerch,
      
        
			
		]);
		
		
	}
    public function deleteFavourite($UserId,$idAction ) {
		$api = $this->api;
        $sql = new DbQuery();
   // $sql='SELECT * from wallets';
        $sql='DELETE FROM favourite_actions WHERE id_user='.pSQL($UserId).' AND id_action='.pSQL($idAction).'';
		// Build FROM
		
        
		$userfavourite = Db::getInstance()->execute($sql);
        
        
        return $api->response([
			'success' => true,
      
            'favouriteAction' => $userfavourite,
      
			
		]);
	
	
}

public function getStock($UserId) {
    
    $api = $this->api;
    $sql = new DbQuery();
    $sql->select('user_settings.simulationMode');
		// Build FROM
		$sql->from('users','users');
      
        $sql->innerJoin('user_settings' ,'user_settings', 'user_settings.id_user_settings=users.id_user_settings');
        $where_clause[] = 'users.id_user = '.pSQL($UserId).'';
        $where_clause = implode( $where_clause);
       $sql->where($where_clause);
		$userSetWallet = Db::getInstance()->executeS($sql);
        $setWallet=implode(" ",$userSetWallet[0]);
        if($setWallet=="0"){
            $sql = new DbQuery();
            $sql->select('stock.id_action,stock.amount,actions.actionName, actions.image');
            // Build FROM
            $sql->from('users');
            $sql->innerJoin('stock' ,'stock', 'users.id_virtual_wallet=stock.id_wallet');
            $sql->innerJoin('actions' ,'actions', 'actions.id_action = stock.id_action');
            $sql->where($where_clause);
            $stock = Db::getInstance()->executeS($sql);
            }
            if($setWallet=="1"){
                $sql = new DbQuery();
                $sql->select('stock.id_action,stock.amount,actions.actionName, actions.image');
                // Build FROM
                $sql->from('users');
                $sql->innerJoin('stock' ,'stock', 'users.id_virtual_wallet=stock.id_wallet');
                $sql->innerJoin('actions' ,'actions', 'actions.id_action = stock.id_action');
                $sql->where($where_clause);
                $stock = Db::getInstance()->executeS($sql);
                }
            else
            $stock="error";
    
    
    return $api->response([
        'success' => true,
        
        'stock' => $stock,
  
        
    ]);
    
    
}

public function updateStock($UserId,$idAction,$amount,$isSellOrBuy) {
    $api = $this->api;
    $sql = new DbQuery();
    $sql->select('user_settings.simulationMode');
		$sql->from('users','users');
        $sql->innerJoin('user_settings' ,'user_settings', 'user_settings.id_user_settings=users.id_user_settings');
        $where_clause[] = 'users.id_user = '.pSQL($UserId).'';
        $where_clause = implode( $where_clause);
        $sql->where($where_clause);
		$userSetWallet = Db::getInstance()->executeS($sql);
        $setWallet=implode(" ",$userSetWallet[0]);
        if($setWallet=="0")
        {
            $sql = new DbQuery();
            $sql->select('stock.amount');
            $sql->from('users');
            $sql->innerJoin('stock' ,'stock', 'users.id_virtual_wallet=stock.id_wallet');
            $where_clause2[] = 'users.id_user = '.pSQL($UserId).' AND stock.id_action='.pSQL($idAction).'';
            $where_clause2 = implode( $where_clause2);
            $sql->where($where_clause2);
            $stock = Db::getInstance()->execute($sql);
            if($stock==FALSE)
            {
                $stock="0";
            }
            else
            {
                $stock=implode(" ",$stock[0]);
                
            }
            }
        if($setWallet=="1")
        {
            $sql = new DbQuery();
            $sql->select('stock.amount');
            $sql->from('users');
            $sql->innerJoin('stock' ,'stock', 'users.id_wallet=stock.id_wallet');
            $where_clause3[] = 'users.id_user = '.pSQL($UserId).' AND stock.id_action='.pSQL($idAction).'';
            $where_clause3 = implode( $where_clause3);
            $sql->where($where_clause3);
            $stock = Db::getInstance()->executeS($sql);
            if($stock==FALSE)
            {
                $stock="0";
            }
            else
            {
                $stock=implode(" ",$stock[0]);
                
            }
        }
        (int) $stock =intval( $stock,  $base = 10);
        if($isSellOrBuy=="sell")
        {
            if($stock<$amount)
            {
                return $api->response([
                    'success' => false,
                    
                    'error' => 'nie wystarczająca liczba akcji na koncie',
                    
                ]);
            }

        }    
        if($isSellOrBuy=="buy")
        {       if($setWallet="0"){
            $sql = new DbQuery();
            $sql->select('wallets.accountBalance');
            // Build FROM
            $sql->from('wallets');
            $sql->innerJoin('users' ,'users', 'users.id_virtual_wallet=wallets.id_wallet');
            $where_clause[] = 'users.id_user = '.pSQL($UserId).'';
        $where_clause = implode( $where_clause);
       $sql->where($where_clause);
            $accountBalance = Db::getInstance()->executeS($sql);
            if($accountBalance==FALSE)
                {
                    $accountBalance="0";
                }
                else
                {
                    $accountBalance=implode(" ",$accountBalance[0]);
                    
                }
            }
            if($setWallet="1"){
                $sql = new DbQuery();
                $sql->select('wallets.accountBalance');
                // Build FROM
                $sql->from('wallets');
                $sql->innerJoin('users' ,'users', 'users.id_wallet=wallets.id_wallet');
                $where_clause4[] = 'users.id_user = '.pSQL($UserId).'';
                $where_clause4 = implode( $where_clause4);
                $sql->where($where_clause4);
               
                $sql->where($where_clause);
                $accountBalance = Db::getInstance()->executeS($sql);
                if($accountBalance==FALSE)
                {
                    $accountBalance="0";
                }
                else
                {
                    $accountBalance=implode(" ",$accountBalance[0]);
                    
                }
                }
                if(!$setWallet=="1"&&!$setWallet=="0" )
            {
                $accountBalance="0";
            }
            (int) $accountBalance =intval( $accountBalance,  $base = 10);
           
            
            if($accountBalance<$amount)
            {
                return $api->response([
                    'success' => false,
                    
                    'error' => 'nie wystarczająca liczba pieniędzy na koncie',
                    'wallet'=> $accountBalance,
                    
                ]);
            }
            
        }    
    return $api->response([
        'success' => true,
        
        'setwallet' => $setWallet,
        'favouriteAction' => $accountBalance,
  
        
    ]);
    
    
}



}