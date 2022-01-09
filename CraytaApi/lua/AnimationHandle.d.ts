declare interface AnimationHandle{
	  /**
   * returns true if this animation is still playing	
   */
  IsPlaying():boolean	
    /**
   * get the current playback speed of the animation	
   */
  GetPlaybackSpeed():number
    /**
   * set the current playback speed of the animation	
   */
  SetPlaybackSpeed(value: number):void
    /**
   * get whether this animation is set to loop	
   */
  IsLooping():boolean
    /**
   * set whether this animation should loop	
   */
  SetLooping(value: boolean):void

    /**
   * stops/cancels the animation on this mesh, this will invalidate this handle as the animation it relates to is no longer playing	
   */
   Stop():void
    /**
   * Set the progress of the animation. 0.0 = the start of the animation, 0.5 = 50% of the way through the animation, 1.0 = the end of the animation, etc	
   */
  SetProgress(normalizedTime: number):void
    /**
   * GetProgress
   */
  GetProgress():number
}	