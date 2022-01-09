declare class Sound extends Entity {
  protected constructor()
  /**
   * Set whether the sound is playing or not.
   */
  active: boolean
  /**
   * Set the SoundAsset that this entity plays
   */
  sound: SoundAsset
  /**
   * Set the volume of the sound (0 = Silent, 1 = Full volume)
   */
  volume: number
  /**
   * Set the pitch of the sound (1 = Default pitch, 0.125 = 8 times slower, 2 = 2 times faster)
   */
  pitch: number
}

declare interface SoundHandle {
  Stop(): void
  Stop(fadeOut: number): void
}