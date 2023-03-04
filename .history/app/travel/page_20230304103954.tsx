import React, { Component, createRef } from 'react';
import ReactFreezeframe from 'react-freezeframe';
import { Freeze } from 'freezeframe/types';
const About = () => {
    private freeze = createRef<ReactFreezeframe>();
    return (
        <div>
          <ReactFreezeframe
            src="foo.gif"
            ref={this.freeze}
            options={{
              trigger: false,
              overlay: true
            }}
            onToggle={(items, isPlaying) => this.logEvent('toggle', items, isPlaying)}
            onStart={(items, isPlaying) => this.logEvent('start', items, isPlaying)}
            onStop={(items, isPlaying) => this.logEvent('stop', items, isPlaying)}
          />
          <button onClick={() => this.start()}>Start</button>
          <button onClick={() => this.stop()}>Stop</button>
          <button onClick={() => this.toggle()}>Toggle</button>
        </div>
      );
    }
    start(): void {
      this.freeze.current?.start();
    }
    stop(): void {
      this.freeze.current?.stop();
    }
    toggle(): void {
      this.freeze.current?.toggle();
    }
    logEvent(event: string, items: Freeze[], isPlaying: boolean): void {
      console.log(event, items, isPlaying);
    }
};

export default About;
