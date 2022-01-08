<?php 


namespace restapi\Action;

use Db;
use restapi\Database\DbQuery;
use restapi\ObjectModel;

class Action extends ObjectModel {
	/** @var $id Action ID */
	public $id_action;

	/** @var int $category_id */
	public $name;
	
	/** @var string $name */
	public $symbol;

	

	/**
     * @see ObjectModel::$definition
     */
    public static $definition = array(
        'table' => 'action','today_actions_history',
        'primary' => 'id_action',
        'fields' => array(
			'Name' => array('type' => self::TYPE_STRING, 'required' => true),
			'Symbol' => array('type' => self::TYPE_STRING, 'required' => true),
            'action_date' => array('type' => self::TYPE_STRING, 'required' => true),
			'exchange' => array('type' => self::TYPE_STRING, 'required' => true),
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