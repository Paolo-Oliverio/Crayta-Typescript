declare interface Asset {
  /**
   * Get the debug name of this asset, this is the develoer name and not a player facing localised Text.
   */
  GetName(): string
  /**
   * Get a string which when passed as the src attribute of an HTML img tag will display the icon
   */
  GetIcon(): string
}

declare interface VoxelAsset extends Asset {}
declare interface CameraShakeAsset extends Asset {}
declare interface WorldAsset extends Asset {}
declare interface PostProcessAsset extends Asset {}
declare interface ColorGradingAsset extends Asset {}
declare interface HorizonAsset extends Asset {}
declare interface SkyMeshAsset extends Asset {}
declare interface EffectAsset extends Asset {}
declare interface SoundAsset extends Asset {}
declare interface WidgetAsset extends Asset {}
declare interface GripAsset extends Asset {}
declare interface VibrationEffectAsset extends Asset {}
declare interface ScriptAsset extends Asset {}
declare interface TemplateAsset extends Asset {}
declare interface MeshAsset extends Asset {
	GetAnimationNames(): string[]
	GetAnimationLength(animationName: string): number
}