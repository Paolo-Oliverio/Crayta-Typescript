declare interface HitResult{
	/**
	 * Get position of hit in world space	 
	 */
	GetPosition(): Vector
	/**
 	* Get position of hit relative to the Entity hit	 
 	*/
	GetRelativePosition(): Vector
	/**
	 * Get normal direction of hit in world space	
	 */
	GetNormal(): Vector
	/**
	 * Get normal direction of the hit relative to the rotation of the Entity hit	 
	 */
	GetRelativeNormal(): Vector
	/**
	 * get the name of the part of the entity that was hit. For example a headshot on a player character will return 'head'	 
	 */
	GetPartName(): string
}