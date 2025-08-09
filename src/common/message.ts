export class Req {
  public reqType: ReqType;
  constructor(reqType: ReqType) {
    this.reqType = reqType;
  }
}
export class Ack {
  public ackType: AckType;
  constructor(ackType: AckType) {
    this.ackType = ackType;
  }
}

export enum ReqType {
  SAVE,
}

export enum AckType {
  SAVED,
}
