
config.frameDivider = 1
// set buffersize of module
config.bufferSize = 16

var phase = 0
var amp = 1
var mix;
var bias_cv
// clamp a number to within a range
let clampNumber = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));

// this is where the synthesis calculation occurs
function process(block) {
    // block.knobs[0] = 0.5
	// Knob ranges from -5 to 5 octaves
	// var pitch = block.knobs[0] * 10 - 5
	// Input follows 1V/oct standard
    // pitch += block.inputs[0][0]
    
    // input 2 on the prototype module corresponds to the 2nd index of the block.inputs array, i.e. block.inputs[1]
    amp = block.inputs[1][0]

    // compare the amplitude of the two signal inputs
    compare = [block.inputs[0][0], block.inputs[1][0]]
    // get the max
    max = Math.max(...compare)
    // get the min
    min = Math.min(...compare)

    // the 1st knob on the prototype module will affect the biasing between input 1 or 2    
    var bias = block.knobs[0] * 2 - 1
    // bias_cv += bias * Math.pow(2, block.inputs[2][0]);
    if(bias < 0.){
        mix = clampNumber( ((Math.abs(bias) * min) + (bias * max) * max * block.inputs[2][0]), -10., 10.)
    } else if (bias > 0.){
        mix = clampNumber( ((bias * max) + ((bias * -1) * min) * min * block.inputs[2][0]), -10., 10.)
    }

    var freq = 1
	//display("Freq: " + freq.toFixed(3) + " Hz")

	// Set all samples in output buffer: this is where each sample is calculated, hence the for...loop. 
	var deltaPhase = config.frameDivider * block.sampleTime * freq
	for (var i = 0; i < block.bufferSize; i++) {
		// Accumulate phase
		phase += deltaPhase
		// Wrap phase around range [0, 1]
        phase %= 1
        // this is like the console.log output of the prototype module. unfortunately it only displays a single concatenated string. 
        display("Logic Module: max, min, mix" + mix)
        
		// Convert phase to sine output
        // block.outputs[0][i] = Math.sin(2 * Math.PI * phase) * 5 * amp
        block.outputs[0][i] = max
        block.outputs[1][i] = min
        block.outputs[2][i] = mix
	}
}
