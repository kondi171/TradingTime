<?php 


namespace restapi\Action;

use Db;
use restapi\Database\DbQuery;
use restapi\ObjectModel;

class Action extends ObjectModel {
	/** @var $id account ID */
	public $id_account;

	/** @var string $first_name */
	public $first_name ;
	
	/** @var string $last_name */
	public $last_name;
    /** @var $login  */
	public $login;

	/** @var string $mail */
	public $mail ;
	
	/** @var string $phone */
	public $phone;

    /** @var string$city */
	public $city;

	/** @var string $street */
	public $street ;
	
	/** @var int $house_number */
	public $house_number;

    /** @var int $flat_number */
	public $flat_number;

	/** @var string $postal_code */
	public $postal_code ;
	
	/** @var int $pesel */
	public $pesel;

    /** @var int $postal_code */
	public $personal_id_number ;
	
	/** @var string $pesel */
	public $date_of_birth;


	

	/**
     * @see ObjectModel::$definition
     */
    public static $definition = array(
        'table' => 'users','account',
        'primary' => 'id_account',
        'fields' => array(
			'first_name' => array('type' => self::TYPE_STRING, 'required' => true),
			'last_name' => array('type' => self::TYPE_STRING, 'required' => true),
            'login' => array('type' => self::TYPE_STRING, 'required' => true),
			'mail' => array('type' => self::TYPE_STRING, 'required' => true),
            'phone' => array('type' => self::TYPE_STRING, 'required' => true),
			'city' => array('type' => self::TYPE_STRING, 'required' => true),
            'street' => array('type' => self::TYPE_STRING, 'required' => true),
			'house_number' => array('type' => self::TYPE_STRING, 'required' => true),
            'flat_number' => array('type' => self::TYPE_STRING, 'required' => true),
			'postal_code' => array('type' => self::TYPE_STRING, 'required' => true),
            'pesel' => array('type' => self::TYPE_STRING, 'required' => true),
			'personal_id_number' => array('type' => self::TYPE_STRING, 'required' => true),
            'date_of_birth' => array('type' => self::TYPE_STRING, 'required' => true),
             
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