### module2 description
module2.js is logical comparator. It takes signal inputs in Inputs 1 & 2, and outputs the Max, Min, Mix of the two signals out Outputs 1, 2, 3, respectively.

- Inputs: IN1, IN2
- Outputs: OUT1, OUT2, OUT3

## Score:

Build a rhythmic pattern using the highlighted controls - culminating in noise morphing into tone.

<img src="https://i.imgur.com/PRBBGu9.png">

Lfo-1 freq results in speed changes.<br/>
The left random rate results in “aftershocks” of rhythmic content.<br/>
VCF freq results in higher overtone-like content

## Score draft:
> Wavy is similar to the sound of some kind of spring, which keeps the pattern until the end.
>
>Something similar to the sound of knocking on the floor in an open place, a bit like footsteps, gradually becoming stronger with the echo. The sound of tapping also becomes like a flap.
>
>The tapping sound gradually became faster, but irregular.
>Gradually more and more noise appeared in the background.
>
>The tapping sound suddenly became regular. Tap it and stop.
>
>The noise is getting louder, like "hum, hum, hum", and a bit like the noise of an airplane.
>
>The humming tone gradually increased, turning into a beeping sound with a regular pause in the middle.
>
>The other sounds suddenly disappeared, and the remaining beeping sounds remained to an end.

git commit -am "beginning to reflect on the score and recording"

# Score Detail
######Visualization of sound, 15 seconds per line.
<img src= "https://drive.google.com/uc?export=view&id=1pPS8yLB9XVKNuwFIQmaYykhDu7n7IkEv">

<br><br>
At start, Wavy is similar to the sound of some kind of spring, which keeps the pattern until the end. The interval is about 3 seconds, and it clearly lasts for one minute. First, the right channel starts ringing, then both sides start ringing. The sound is getting stronger.

> Wavy is similar to the sound of some kind of spring, which keeps the pattern until the end.

Around 0:20 Something similar to the sound of knocking on the floor in an open place, a bit like footsteps, gradually becoming stronger with the echo. The sound of tapping also becomes like a flap. After the sound becomes stronger, it becomes a bit like an explosion sound, producing a sound explosion at the end of the spring sound.

>Something similar to the sound of knocking on the floor in an open place, a bit like footsteps, gradually becoming stronger with the echo. The sound of tapping also becomes like a flap.
>The tapping sound gradually became faster, but irregular.

After 1 min Gradually, more and more noise appeared in the background.It seems that the old-fashioned microwave oven breaks the electromagnetic sound.

>Gradually more and more noise appeared in the background.

Around 1 min 10s, The tapping sound suddenly became regular. Tap it and stop. The noise gradually becomes quieter.

>The tapping sound suddenly became regular. Tap it and stop.

Around the 20s  The tapping sound gradually became faster but irregular. It make people feels rushed.
At 1 min 30s, the noise is getting louder, like "hum, hum, hum," and a bit like the noise of an airplane. The electromagnetic sound like the one mentioned above has reached its some kind limit.

>The noise is getting louder, like "hum, hum, hum", and a bit like the noise of an airplane.

~1:50 The humming tone gradually increased, turning into a beeping sound with a regular pause in the middle. It sounds like some kind of alarm.

>The humming tone gradually increased, turning into a beeping sound with a regular pause in the middle.

At 2min The other sounds suddenly disappeared, and the remaining beeping sounds remained to an end.

>The other sounds suddenly disappeared, and the remaining beeping sounds remained to an end.

# Score with new VCV
<img src= "https://drive.google.com/uc?export=view&id=1V_YOUSdHdZDggCATyfudO_lTWHjKEX8P">
recording3.wav
######Visualization of sound, 15 seconds per line.

>Each tone interval is larger than recording, and a sound is heard every 4 seconds.

There was only one spring tone in the first time, and a spring tone and a rising tone appeared in the second time. The third rising tone became sharper, the fourth time slightly decreased, and the fifth time picked up.

>The spring sound is in the left ear and the rising sound is in the right ear. The spring tone sounds first, and the rising tone comes out near the end of the spring tone.

The sound of an explosion appeared for the sixth time, and the sound of the seventh explosion strengthened, and then continued to strengthen.

>At the same time, it becomes thicker and strengthens the echo. There was noise at the same time, and it was still audible in the middle of the interval.

About one minute, sound of continuous blasting. After a pause, the continuous blasting again produced a huge noise.

At the end are the echoes of the blast and fragmented noise.


####Story mode
```shell
There is a continuous hum from 0 to 20 seconds, and the echo after the first sound increases, like a sonar approaching.

There was a loud explosion at 25 seconds. According to the previous sound effects, it should be from the torpedo detected by the sonar, and there is a feeling of touching the object.

The next few explosions were very crisp. Unlike the previous explosions, which felt like they were hitting objects, they should be detonated mines in advance. And it will be stable every 3 seconds to see, it may be into a mine group.

About 50 seconds, there was another violent explosion, and it appeared that another torpedo hit directly. Then, with the strong radio noise, it is presumed that the hull started to flood.

At 1:00, there was a series of violent blasting sounds, which may be caused by another burst of torpedo hits.

It became calm after 1:05, with only a few slight sounds, which may be the feeling of the boat's parts drifting on the water, and the body of the boat has sunk into the sea
```
