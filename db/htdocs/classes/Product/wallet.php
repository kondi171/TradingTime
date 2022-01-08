<?php 


namespace restapi\Action;

use Db;
use restapi\Database\DbQuery;
use restapi\ObjectModel;

class Wallet extends ObjectModel {
	/** @var $id Action ID */
	public $id_wallet;

	/** @var double $category_id */
	public $accountBalance;
	
	/** @var string $name */
	public $isReal;

	

	/**
     * @see ObjectModel::$definition
     */
    public static $definition = array(
        'table' => 'wallet',
        'primary' => 'id_wallet',
        'fields' => array(
			'accountBalance' => array('type' => self::TYPE_STRING, 'required' => true),
			'isReal' => array('type' => self::TYPE_STRING, 'required' => true),
              )
        );

     /**
     * constructor.
     *
     * @param null $id
     */
    public function __construct($id = null)
    {
        parent::__construct($id);
	}
}