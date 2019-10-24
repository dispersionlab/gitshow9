config.frameDivider = 1
config.bufferSize = 16

var phase = 0
var amp = 1
var mix;
var bias_cv
let clampNumber = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));


function process(block) {
    // block.knobs[0] = 0.5
	// Knob ranges from -5 to 5 octaves
	// var pitch = block.knobs[0] * 10 - 5
	// Input follows 1V/oct standard
    // pitch += block.inputs[0][0]
    
    amp = block.inputs[1][0]

    compare = [block.inputs[0][0], block.inputs[1][0]]
    max = Math.max(...compare)
    min = Math.min(...compare)

    // let i = compare.indexOf(Math.max(...compare));

    function indexOfMax(arr) {
        if (arr.length === 0) {
            return -1;
        }
        var max = arr[0];
        var maxIndex = 0;
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                maxIndex = i;
                max = arr[i];
            }
        }
        return maxIndex;
    }

    var bias = block.knobs[0] * 2 - 1
    // bias_cv += bias * Math.pow(2, block.inputs[2][0]);
    if(bias < 0.){
        mix = clampNumber( ((Math.abs(bias) * min) + (bias * max) * max * block.inputs[2][0]), -10., 10.)
    } else if (bias > 0.){
        mix = clampNumber( ((bias * max) + ((bias * -1) * min) * min * block.inputs[2][0]), -10., 10.)
    }

    var freq = 1
	//display("Freq: " + freq.toFixed(3) + " Hz")

	// Set all samples in output buffer
	var deltaPhase = config.frameDivider * block.sampleTime * freq
	for (var i = 0; i < block.bufferSize; i++) {
		// Accumulate phase
		phase += deltaPhase
		// Wrap phase around range [0, 1]
        phase %= 1
        display("Logic Module: max, min, mix")
        
		// Convert phase to sine output
        // block.outputs[0][i] = Math.sin(2 * Math.PI * phase) * 5 * amp
        block.outputs[0][i] = max
        block.outputs[1][i] = min
        block.outputs[2][i] = mix
	}
}
