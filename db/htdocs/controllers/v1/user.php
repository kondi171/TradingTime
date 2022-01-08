<?php


namespace restapi\v1;

use Db;
use restapi\Route;
use restapi\Database\DbQuery;
use restapi\Product\Product as ProductObject;
use restapi\Util\ArrayUtils;
use restapi\Validate;

class User extends Route {

    public function getUsers() {
		$api = $this->api;
		
		// Build query
		$sql = new DbQuery();
		// Build SELECT
		$sql->select('account.id_account,account.firstName,account.lastName,account.login');
		// Build FROM
		$sql->from('users','users');
        $sql->innerJoin('account' ,'account', 'account.id_account=users.id_account');

		$Users = Db::getInstance()->executeS($sql);

		return $api->response([
			'success' => true,
			'users' => $Users,
            
		]);
	}
	

    public function getUser($UserId) {
		$api = $this->api;

		
        $sql = new DbQuery();
        $sql->select('account.id_account,account.firstName,account.lastName,account.login,account.email,account.telephone,account.city,account.street,account.house,account.apartment,account.postalCode,account.pesel,account.personalId,account.bankAccount,account.birthDate');
		// Build FROM
		$sql->from('users','users');
        $sql->innerJoin('account' ,'account', 'account.id_account=users.id_account');
       // $sql->innerJoin('user_settings' ,'user_settings', 'user_settings.id_user_settings=users.id_user_settings');
       // $sql->innerJoin('wallets' ,'wallets', 'wallets.id_wallet=wallets.id_wallet');

        $where_clause[] = 'users.id_user = '.pSQL($UserId).'';
        $where_clause = implode( $where_clause);
        $sql->where($where_clause);
		$User = Db::getInstance()->executeS($sql);
        $sql = new DbQuery();
        $sql->select('user_settings.*');
		// Build FROM
		$sql->from('users','users');
      
        $sql->innerJoin('user_settings' ,'user_settings', 'user_settings.id_user_settings=users.id_user_settings');
      
       $sql->where($where_clause);
		$Usersetings = Db::getInstance()->executeS($sql);
		
      
        return $api->response([
			'success' => true,
          
			'user' => $User,
            'userSettings' => $Usersetings,
      
			
		]);
		
		
	}
  public function login(){
    $api = $this->api;
	$payload = $api->request()->post(); 

	$login = ArrayUtils::get($payload, 'login');
	$password = ArrayUtils::get($payload, 'password');
    if(!$login && !$password) {
		return $api->response([
			'success' => false,
			'message' => 'Wprowadź wszystkie dane',
            'login' => $login,
            'password'=>$password,
		]);
	}
    if (!Validate::isCleanHtml($login)&&!Validate::isCleanHtml($password)) {
        return $api->response([
            'success' => false,
            'message' => 'Dane nieprawidłowe'
        ]);
    }
    $sql = new DbQuery();
        $sql->select('account.password');
		// Build FROM
		$sql->from('users','users');
        $sql->innerJoin('account' ,'account', 'account.id_account=users.id_account');
        $where_clause[] = 'account.login =  \''.$login.'\' ';
        $where_clause = implode( $where_clause);
        $sql->where($where_clause);
		$dbpassword = Db::getInstance()->executeS($sql);
        if($dbpassword){
        $pass=implode(" ",$dbpassword[0]);
        
       if($pass==$password){
        
        $sql = new DbQuery();
        $sql->select('users.id_user');
		// Build FROM
		$sql->from('users','users');
        $sql->innerJoin('account' ,'account', 'account.id_account=users.id_account');
       
        $sql->where($where_clause);
		$id = Db::getInstance()->executeS($sql);
        $id2=implode(" ",$id[0]);
        
            return $api->response([
                'success' => true,
                'message' => 'zalogowano',
                'id_user'=>$id2,
            
            ]);
        }
    }
        return
        $api->response([
            'success' => false,
            'message' => 'nie znaleziono użytkownika o takiej kombinacji loginu i hasła',
        ]);



}
public function registry(){
    $api = $this->api;
	$payload = $api->request()->post(); 

	$login = ArrayUtils::get($payload, 'login');
    $email = ArrayUtils::get($payload, 'email');
	$password = ArrayUtils::get($payload, 'password');
    $firstName = ArrayUtils::get($payload, 'firstName');
    $lastName = ArrayUtils::get($payload, 'lastName');
	$personalId = ArrayUtils::get($payload, 'personalId');
    $pesel = ArrayUtils::get($payload, 'pesel');
    $telephone = ArrayUtils::get($payload, 'telephone');
	$city = ArrayUtils::get($payload, 'city');
    $street = ArrayUtils::get($payload, 'street');
    $house = ArrayUtils::get($payload, 'house');
	$apartment = ArrayUtils::get($payload, 'apartment');
    $postalCode = ArrayUtils::get($payload, 'postalCode');
    $bankAccount = ArrayUtils::get($payload, 'bankAccount');
    $birthDate = ArrayUtils::get($payload, 'birthDate');
	

    if (!Validate::isCleanHtml($login)&&!Validate::isCleanHtml($password)&&
    !Validate::isCleanHtml($email)&&!Validate::isCleanHtml($firstName)&&
    !Validate::isCleanHtml($lastName)&&!Validate::isCleanHtml($personalId)&&
    !Validate::isCleanHtml($pesel)&&!Validate::isCleanHtml($telephone)&&
    !Validate::isCleanHtml($city)&&!Validate::isCleanHtml($apartment)&&
    !Validate::isCleanHtml($street)&&!Validate::isCleanHtml($postalCode)&&
    !Validate::isCleanHtml($house)&&!Validate::isCleanHtml($postalCode)&&
    !Validate::isCleanHtml($bankAccount)&&!Validate::isCleanHtml($birthDate)  
    ) {
        return $api->response([
            'success' => false,
            'message' => 'Dane nieprawidłowe'
        ]);
    }
    $api = $this->api;
    $prasSerch=0;
        $sql = new DbQuery();
   
        $sql = 'SELECT login FROM `account` WHERE `login`=\''.$login.'\'';
        

        
        $serch = Db::getInstance()->executes($sql);
       // $long_string = implode(',', $serch);
//$integerIDs = array_map('intval', explode(',', $long_string));
if($serch){
    $pass=implode(" ",$serch[0]);
        return $api->response([
            'success' => false,
            'message' => 'użytkownik już istnieje',

        ]);}
    
        $sql = new DbQuery();
		$sql->select('MAX(account.id_account)');
		$sql->from('account','account');
        $id_account = Db::getInstance()->executes($sql);
        $pass=implode(" ",$id_account[0]);
       (int) $id_accountint =intval( $pass,  $base = 10);
        $id_accountint++;
       

        $sql = new DbQuery();
		$sql->select('MAX(users.id_user)');
		$sql->from('users','users');
        $id_user = Db::getInstance()->executes($sql);
        $pass=implode(" ",$id_user[0]);
       (int) $id_userint =intval( $pass,  $base = 10);
        $id_userint++;

        
        $sql = new DbQuery();
		$sql->select('MAX(user_settings.id_user_settings)');
		$sql->from('user_settings','user_settings');
        $id_userset = Db::getInstance()->executes($sql);
        $pass=implode(" ",$id_userset[0]);
       (int) $id_usersetint =intval( $pass,  $base = 10);
        $id_usersetint++;

        $sql = new DbQuery();
		$sql->select('MAX(wallets.id_wallet)');
		$sql->from('wallets','wallets');
        $id_wallet = Db::getInstance()->executes($sql);
        $pass=implode(" ",$id_wallet[0]);
       (int) $id_walletint =intval( $pass,  $base = 10);
        $id_walletint++;
        $id_walletint2=$id_walletint+1; 

        $sql = new DbQuery();
$sql='INSERT INTO account (id_account,firstName, lastName, login, password, email, telephone, city, street, house, apartment, postalCode, pesel, personalId, bankAccount, birthDate) 
VALUES('.$id_accountint.',\''.$firstName.'\',\''.$lastName.'\',\''.$login.'\',\''.$password.'\',\''.$email.'\',\''.$telephone.'\',\''.$city.'\',\''.$street.'\',\''.$house.'\',\''.$apartment.'\',\''.$postalCode.'\',\''.$pesel.'\',\''.$personalId.'\',\''.$bankAccount.'\',\''.$birthDate.'\')';
//$sql='INSERT INTO account (id_account,firstName, lastName) VALUES('.$id_accountint.','.$firstName.','.$lastName.')';
       $accountIsAdd=Db::getInstance()->executes($sql);
       if(!$accountIsAdd){
       return $api->response([
           'success' => false,
           'message' => 'nie dodano do tabeli account',
           'error'=>$accountIsAdd,
       ]);}
        
       

        $sql = new DbQuery();
        $sql='INSERT  INTO wallets (id_wallet,accountBalance,isReal)VALUES('.$id_walletint2.',0,0)';
        $walletrealIsAdd=Db::getInstance()->execute($sql);
        if(!$walletrealIsAdd){
        return $api->response([
            'success' => false,
            'message' => 'nie dodano wirtualnego porfela',

        ]);}

        $sql = new DbQuery();
        $sql='INSERT  INTO wallets (id_wallet,accountBalance,isReal)VALUES('.$id_walletint.',0,1)';
        $walletrealIsAdd=Db::getInstance()->execute($sql);
        if(!$walletrealIsAdd){
        return $api->response([
            'success' => false,
            'message' => 'nie dodano realnego porfela',

        ]);}

        $sql = new DbQuery();
        $sql='INSERT  INTO user_settings (id_user_settings,twoFactorAuthentication,simulationMode,emailNotifications,wallpaper,theme,avatar,isAdmin)VALUES('.$id_usersetint.',0,0,0,1,1,1,0)';
        $setingsIsAdd=Db::getInstance()->execute($sql);
        if(!$setingsIsAdd){
        return $api->response([
            'success' => false,
            'message' => 'nie dodano usawtień użytkownika',

        ]);}

        $sql = new DbQuery();
        $sql='INSERT INTO users (id_user,id_virtual_wallet,id_wallet,id_account,id_user_settings,all_information_provided)
        VALUES('.$id_userint.','.$id_walletint2.','.$id_walletint.','.$id_accountint.','.$id_usersetint.',1)';
        $userIsAdd=Db::getInstance()->executes($sql);
        if(!$userIsAdd){
        return $api->response([
            'success' => false,
            'message' => 'nie dodano do tablei users',
            'error'=>$userIsAdd,

        ]);}
       
       
      return $api->response([
        'success' => true,
        'message' => 'dodano poprawnie wszystkie dane',

    ]);
       

        
}
  
	

	
	
	
}


