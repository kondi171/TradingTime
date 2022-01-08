<?php 
/**
 * @package    PHP Advanced API Guide
 * @author     Davison Pro <davisonpro.coder@gmail.com>
 * @copyright  2019 DavisonPro
 * @version    1.0.0
 * @since      File available since Release 1.0.0
 */

 // Namespaces
define('API_NAMESPACE',          'restapi');
define('API_DIR_ROOT',            dirname(__FILE__));
define('API_DIR_CLASSES',         API_DIR_ROOT . DIRECTORY_SEPARATOR . 'classes' . DIRECTORY_SEPARATOR);
define('API_DIR_CONTROLLERS',     API_DIR_ROOT . DIRECTORY_SEPARATOR . 'controllers' . DIRECTORY_SEPARATOR);

require_once API_DIR_ROOT . DIRECTORY_SEPARATOR . 'vendor' . DIRECTORY_SEPARATOR . 'autoload.php'; 
require_once API_DIR_ROOT . DIRECTORY_SEPARATOR . 'autoload.php'; 
require_once API_DIR_ROOT . DIRECTORY_SEPARATOR . 'functions.php'; 

use restapi\Api;
use restapi\Database\DbQuery;
use restapi\Database\DbCore;
use restapi\Database\DbPDOCore;
use restapi\Database\DbMySQLiCore;

abstract class Db extends DbCore {};
class DbPDO extends DbPDOCore {};
class DbMySQLi extends DbMySQLiCore {};

/** CORS Middleware */
$config = array(
	/** MySQL database name */
	'database_name' => 'tradingtime',
	/** MySQL hostname */
	'database_host' => 'localhost',
	/** MySQL database username */
	'database_user' => 'root',
	/** MySQL database password */ 
	'database_password' => '',
	/** MySQL Database Table prefix. */
	'database_prefix' => '',
	/** preferred database */
	'database_engine' => 'DbPDO',
	/** API CORS */
	'cors' => [
		'enabled' => true,
		'origin' => '*', // can be a comma separated value or array of hosts
		'headers' => [
			'Access-Control-Allow-Headers' => 'Origin, X-Requested-With, Authorization, Cache-Control, Content-Type, Access-Control-Allow-Origin',
			'Access-Control-Allow-Credentials' => 'true',
			'Access-Control-Allow-Methods' => 'GET,PUT,POST,DELETE,OPTIONS,PATCH'
		]
	]
);

define('_DB_SERVER_', $config['database_host']);
define('_DB_NAME_', $config['database_name']);

define('_DB_USER_', $config['database_user']);
define('_DB_PASSWD_', $config['database_password']);
define('_DB_PREFIX_',  $config['database_prefix']);
define('_MYSQL_ENGINE_',  $config['database_engine']);

/** API Construct */
$api = new Api([
	'mode' => 'development',
    'debug' => true
]);

$api->add(new \restapi\Slim\CorsMiddleware());
$api->config('debug', true);

/**
 * Request Payload
 */
$params = $api->request->get();
$requestPayload = $api->request->post();

$api->group('/api', function () use ($api) {
	$api->group('/v1', function () use ($api) {
		
		/** Get all Action */
		$api->get('/action?', '\restapi\v1\Action:getActions')->name('get_action');
		/** Get sigle user*/
		$api->get('/user/:id_user?', '\restapi\v1\User:getUser')->name('get_user');
		/**Get all users */
		$api->get('/user?', '\restapi\v1\User:getUsers')->name('get_users');
		/** login*/
		$api->post('/login?', '\restapi\v1\User:login')->name('login');
		/** registry*/
		$api->post('/registry?', '\restapi\v1\User:registry')->name('registry');
		/**Get single action */
		$api->get('/action/:id_action?', '\restapi\v1\Action:getAction')->name('get_action');
		/**get accountBalance for user*/
		$api->get('/wallet/:id_user?', '\restapi\v1\wallet:getWallet')->name('get_wallet');
		/**get favourite actions for user*/
		$api->get('/favourite/:id_user?', '\restapi\v1\wallet:getFavourite')->name('get_favourite');
		/**get add favourite actions for user*/
		$api->get('/addfavourite/:id_user?&:id_action', '\restapi\v1\wallet:addFavourite')->name('add_favourite');
		/**delete favourite actions for user*/
		$api->get('/deletefavourite/:id_user?&:id_action', '\restapi\v1\wallet:deleteFavourite')->name('delete_favourite');
		/**get stock for user*/
		$api->get('/stock/:id_user?', '\restapi\v1\wallet:getStock')->name('get_stock');
		/**update stock for user*/
		$api->get('/stockUpdate/:id_user?&:id_action&:amount&:sellOrBuy', '\restapi\v1\wallet:updateStock')->name('update_stock');

	});
});

$api->notFound(function () use ($api) {
	$api->response([
		'success' => false,
		'error' => 'Resource Not Found'
	]);
	return $api->stop();
});

$api->response()->header('Content-Type', 'application/json; charset=utf-8');
$api->run();
