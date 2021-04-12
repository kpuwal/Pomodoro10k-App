"use strict";

export type DataProps = {
  focus: number,
  relax: number,
};

export interface TimerProps {
  idx: number,
  data: DataProps,
};

export const Timer = (value: DataProps): TimerProps => {
  return {
    idx: Math.random(),
    data: {
      focus: value.focus,
      relax: value.relax,
    },
  };
}

// type valueProp = {
//   focus: number,
//   relax: number,
// };

// export class Timer {
//   idx: number;
//   data: {
//     focus: number,
//     relax: number,
//   };

//   constructor(value: valueProp) {
//     this.idx = Math.random();
//     this.data = this.addData(value);
//   }

//   addData(value: valueProp) {
//     return {
//       focus: value.focus,
//       relax: value.relax,
//     }
//   }
// };
