declare class Light extends Entity {
	protected constructor()
	color: Color
	intensity: number
	innerAngle:number
	outerAngle:number
	attenuation:number
	exponent:number
	specular:boolean
	shadows:boolean
}
