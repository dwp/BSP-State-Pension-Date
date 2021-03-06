'use strict';
const assert = require('assert');
const proxyquire = require('proxyquire');

const {getStatePensionDateAsString} = require('../src/get-state-pension-date');

//
// Start of tests
//
describe('Men born before 6 Dec 1953 retire at 65. So, getStatePensionDateAsString', () => {
  // Men born before 6 Dec 1953 retire at 65
  it('Should return 2018-12-05 when a DOB of 1953-12-05 is applied to a Male', () => {
    assert.equal('2018-12-05', getStatePensionDateAsString('1953-12-05', 'M'));
  });

  // Men born on a leap day before 6 Dec 1953
  it('Should return 2017-03-01 when a DOB of 1952-02-29 (leap date) is applied to a Male', () => {
    assert.equal('2017-03-01', getStatePensionDateAsString('1952-02-29', 'M'));
  });
});

describe('Women born before 6 Apr 1950 Retire at 60. So, getStatePensionDateAsString', () => {
  // Women born before 6 Apr 1950 Retire at 60
  it('Should return 2010-04-05 when a DOB of 1950-04-05 is applied to a Female', () => {
    assert.equal('2010-04-05', getStatePensionDateAsString('1950-04-05', 'F'));
  });
});

describe('Females born 6 Apr 1950 - 5 May 1950, retire on 6 May 2010. So, getStatePensionDateAsString', () => {
  //
  // Pensions act 1995
  //
  // Females born 6 Apr 1950 - 5 May 1950
  it('Should return 2010-05-06 when a DOB of 1950-04-06 is applied to a Female', () => {
    assert.equal('2010-05-06', getStatePensionDateAsString('1950-04-06', 'F'));
  });

  it('Should return 2010-05-06 when a DOB of 1950-05-05 is applied to a Female', () => {
    assert.equal('2010-05-06', getStatePensionDateAsString('1950-05-05', 'F'));
  });

  it('Should NOT return 2010-05-06 when a DOB of 1950-05-05 is applied to a Male', () => {
    assert.notEqual('2010-05-06', getStatePensionDateAsString('1950-05-05', 'M'));
  });
});

describe('Females born 6 May 1950 - 5 Jun 1950, retire on 6 Jul 2010. So, getStatePensionDateAsString', () => {
  // Females born 6 May 1950 - 5 Jun 1950
  it('Should return 2010-07-06 when a DOB of 1950-05-06 is applied to a Female', () => {
    assert.equal('2010-07-06', getStatePensionDateAsString('1950-05-06', 'F'));
  });

  it('should return 2010-07-06 when a DOB of 1950-06-05 is applied to a Female', () => {
    assert.equal('2010-07-06', getStatePensionDateAsString('1950-06-05', 'F'));
  });

  it('should NOT return 2010-07-06 when a DOB of 1950-07-05 is applied to a Male', () => {
    assert.notEqual('2010-07-06', getStatePensionDateAsString('1950-06-05', 'M'));
  });
});

describe('Females born 6 Jun 1950 - 5 Jul 1950, retire on 6 Sep 2010. So, getStatePensionDateAsString', () => {
  // Females born 6 Jun 1950 - 5 Jul 1950
  it('should return 2010-09-06 when a DOB of 1950-06-06 is applied to a Female', () => {
    assert.equal('2010-09-06', getStatePensionDateAsString('1950-06-06', 'F'));
  });

  it('should return 2010-09-06 when a DOB of 1950-07-05 is applied to a Female', () => {
    assert.equal('2010-09-06', getStatePensionDateAsString('1950-07-05', 'F'));
  });

  it('should NOT return 2010-09-06 when a DOB of 1950-07-05 is applied to a Male', () => {
    assert.notEqual('2010-09-06', getStatePensionDateAsString('1950-07-05', 'M'));
  });
});

describe('Females born 6 Jul 1950 - 5 Aug 1950, retire on 6 Nov 2010. So, getStatePensionDateAsString', () => {
  // Females born 6 Jul 1950 - 5 Aug 1950
  it('should return 2010-01-06 when a DOB of 1950-07-06 is applied to a Female', () => {
    assert.equal('2010-11-06', getStatePensionDateAsString('1950-07-06', 'F'));
  });

  it('should return 2010-11-06 when a DOB of 1950-08-05 is applied to a Female', () => {
    assert.equal('2010-11-06', getStatePensionDateAsString('1950-08-05', 'F'));
  });

  it('should NOT return 2010-09-06 when a DOB of 1950-07-05 is applied to a Male', () => {
    assert.notEqual('2010-11-06', getStatePensionDateAsString('1950-08-05', 'M'));
  });
});

describe('Females born 6 Aug 1950 - 5 Sep 1950, retire on 6 Jan 2011. So, getStatePensionDateAsString', () => {
  // Females born 6 Aug 1950 - 5 Sep 1950
  it('should return 2011-01-06 when a DOB of 1950-08-06 is applied to a Female', () => {
    assert.equal('2011-01-06', getStatePensionDateAsString('1950-08-06', 'F'));
  });

  it('should return 2011-01-06 when a DOB of 1950-09-05 is applied to a Female', () => {
    assert.equal('2011-01-06', getStatePensionDateAsString('1950-09-05', 'F'));
  });

  it('should NOT return 2011-01-06 when a DOB of 1950-09-05 is applied to a Male', () => {
    assert.notEqual('2011-01-06', getStatePensionDateAsString('1950-09-05', 'M'));
  });
});

describe('Females born 6 Sep 1950 - 5 Oct 1950, retire on 6 Mar 2011. So, getStatePensionDateAsString', () => {
  // Females born 6 Sep 1950 - 5 Oct 1950
  it('should return 2011-03-06 when a DOB of 1950-09-06 is applied to a Female', () => {
    assert.equal('2011-03-06', getStatePensionDateAsString('1950-09-06', 'F'));
  });

  it('should return 2011-03-06 when a DOB of 1950-10-05 is applied to a Female', () => {
    assert.equal('2011-03-06', getStatePensionDateAsString('1950-10-05', 'F'));
  });

  it('should NOT return 2011-03-06 when a DOB of 1950-10-05 is applied to a Male', () => {
    assert.notEqual('2011-03-06', getStatePensionDateAsString('1950-10-05', 'M'));
  });
});

describe('Females born 6 Oct 1950 - 5 Nov 1950, retire on 6 May 2011. So, getStatePensionDateAsString', () => {
  // Females born 6 Oct 1950 - 5 Nov 1950
  it('should return 2011-05-06 when a DOB of 1950-10-06 is applied to a Female', () => {
    assert.equal('2011-05-06', getStatePensionDateAsString('1950-10-06', 'F'));
  });

  it('should return 2011-05-06 when a DOB of 1950-11-05 is applied to a Female', () => {
    assert.equal('2011-05-06', getStatePensionDateAsString('1950-11-05', 'F'));
  });

  it('should NOT return 2011-05-06 when a DOB of 1950-11-05 is applied to a Male', () => {
    assert.notEqual('2011-05-06', getStatePensionDateAsString('1950-11-05', 'M'));
  });
});

describe('Females born 6 Nov 1950 - 5 Dec 1950, retire on 6 Jul 2011. So, getStatePensionDateAsString', () => {
  // Females born 6 nov 1950 - 5 Dec 1950
  it('should return 2011-07-06 when a DOB of 1950-11-06 is applied to a Female', () => {
    assert.equal('2011-07-06', getStatePensionDateAsString('1950-11-06', 'F'));
  });

  it('should return 2011-07-06 when a DOB of 1950-12-05 is applied to a Female', () => {
    assert.equal('2011-07-06', getStatePensionDateAsString('1950-12-05', 'F'));
  });

  it('should NOT return 2011-07-06 when a DOB of 1950-12-05 is applied to a Male', () => {
    assert.notEqual('2011-07-06', getStatePensionDateAsString('1950-12-05', 'M'));
  });
});

describe('Females born 6 Dec 1950 - 5 Jan 1951, retire on 6 Sep 2011. So, getStatePensionDateAsString', () => {
  // Females born 6 Dec 1950 - 5 Jan 1951
  it('should return 2011-09-06 when a DOB of 1950-12-06 is applied to a Female', () => {
    assert.equal('2011-09-06', getStatePensionDateAsString('1950-12-06', 'F'));
  });

  it('should return 2011-09-06 when a DOB of 1951-01-05 is applied to a Female', () => {
    assert.equal('2011-09-06', getStatePensionDateAsString('1951-01-05', 'F'));
  });

  it('should NOT return 2011-09-06 when a DOB of 1951-01-05 is applied to a Male', () => {
    assert.notEqual('2011-09-06', getStatePensionDateAsString('1951-01-05', 'M'));
  });
});

describe('Females born 6 Jan 1951 - 5 Feb 1951, retire on 6 Nov 2011. So, getStatePensionDateAsString', () => {
  // Females born 6 Jan 1951 - 5 Feb 1951
  it('should return 2011-11-06 when a DOB of 1951-01-06 is applied to a Female', () => {
    assert.equal('2011-11-06', getStatePensionDateAsString('1951-01-06', 'F'));
  });

  it('should return 2011-11-06 when a DOB of 1951-02-05 is applied to a Female', () => {
    assert.equal('2011-11-06', getStatePensionDateAsString('1951-02-05', 'F'));
  });

  it('should NOT return 2011-11-06 when a DOB of 1951-02-05 is applied to a Male', () => {
    assert.notEqual('2011-11-06', getStatePensionDateAsString('1951-02-05', 'M'));
  });
});

describe('Females born 6 Feb 1951 - 5 Mar 1951, retire on 6 Jan 2012. So, getStatePensionDateAsString', () => {
  // Females born 6 Feb 1951 - 5 Mar 1951
  it('should return 2012-01-06 when a DOB of 1951-02-06 is applied to a Female', () => {
    assert.equal('2012-01-06', getStatePensionDateAsString('1951-02-06', 'F'));
  });

  it('should return 2012-01-06 when a DOB of 1951-03-05 is applied to a Female', () => {
    assert.equal('2012-01-06', getStatePensionDateAsString('1951-03-05', 'F'));
  });

  it('should NOT return 2012-01-06 when a DOB of 1951-03-05 is applied to a Male', () => {
    assert.notEqual('2012-01-06', getStatePensionDateAsString('1951-03-05', 'M'));
  });
});

describe('Females born 6 Mar 1951 - 5 Apr 1951, retire on 6 Mar 2012. So, getStatePensionDateAsString', () => {
  // Females born 6 Mar 1951 - 5 Apr 1951
  it('should return 2012-03-06 when a DOB of 1951-03-06 is applied to a Female', () => {
    assert.equal('2012-03-06', getStatePensionDateAsString('1951-03-06', 'F'));
  });

  it('should return 2012-03-06 when a DOB of 1951-04-05 is applied to a Female', () => {
    assert.equal('2012-03-06', getStatePensionDateAsString('1951-04-05', 'F'));
  });

  it('should NOT return 2012-03-06 when a DOB of 1951-04-05 is applied to a Male', () => {
    assert.notEqual('2012-03-06', getStatePensionDateAsString('1951-04-05', 'M'));
  });
});

describe('Females born 6 Apr 1951 - 5 May 1951, retire on 6 May 2012. So, getStatePensionDateAsString', () => {
  // Females born 6 Apr 1951 - 5 May 1951
  it('should return 2012-05-06 when a DOB of 1951-04-06 is applied to a Female', () => {
    assert.equal('2012-05-06', getStatePensionDateAsString('1951-04-06', 'F'));
  });

  it('should return 2012-05-06 when a DOB of 1951-05-05 is applied to a Female', () => {
    assert.equal('2012-05-06', getStatePensionDateAsString('1951-05-05', 'F'));
  });

  it('should NOT return 2012-05-06 when a DOB of 1951-05-05 is applied to a Male', () => {
    assert.notEqual('2012-05-06', getStatePensionDateAsString('1951-05-05', 'M'));
  });
});

describe('Females born 6 May 1951 - 5 Jun 1951, retire on 6 Jul 2012. So, getStatePensionDateAsString', () => {
  // Females born 6 May 1951 - 5 Jun 1951
  it('should return 2012-07-06 when a DOB of 1951-05-06 is applied to a Female', () => {
    assert.equal('2012-07-06', getStatePensionDateAsString('1951-05-06', 'F'));
  });

  it('should return 2012-07-06 when a DOB of 1951-06-05 is applied to a Female', () => {
    assert.equal('2012-07-06', getStatePensionDateAsString('1951-06-05', 'F'));
  });

  it('should NOT return 2012-07-06 when a DOB of 1951-06-05 is applied to a Male', () => {
    assert.notEqual('2012-07-06', getStatePensionDateAsString('1951-06-05', 'M'));
  });
});

describe('Females born 6 Jun 1951 - 5 Jul 1951, retire on 6 Sep 2012. So, getStatePensionDateAsString', () => {
  // Females born 6 Jun 1951 - 5 Jul 1951
  it('should return 2012-09-06 when a DOB of 1951-06-06 is applied to a Female', () => {
    assert.equal('2012-09-06', getStatePensionDateAsString('1951-06-06', 'F'));
  });

  it('should return 2012-09-06 when a DOB of 1951-07-05 is applied to a Female', () => {
    assert.equal('2012-09-06', getStatePensionDateAsString('1951-07-05', 'F'));
  });

  it('should NOT return 2012-09-06 when a DOB of 1951-07-05 is applied to a Male', () => {
    assert.notEqual('2012-09-06', getStatePensionDateAsString('1951-07-05', 'M'));
  });
});

describe('Females born 6 Jul 1951 - 5 Aug 1951, retire on 6 Nov 2012. So, getStatePensionDateAsString', () => {
  // Females born 6 Jul 1951 - 5 Aug 1951
  it('should return 2012-11-06 when a DOB of 1951-07-06 is applied to a Female', () => {
    assert.equal('2012-11-06', getStatePensionDateAsString('1951-07-06', 'F'));
  });

  it('should return 2012-11-06 when a DOB of 1951-08-05 is applied to a Female', () => {
    assert.equal('2012-11-06', getStatePensionDateAsString('1951-08-05', 'F'));
  });

  it('should NOT return 2012-11-06 when a DOB of 1951-08-05 is applied to a Male', () => {
    assert.notEqual('2012-11-06', getStatePensionDateAsString('1951-08-05', 'M'));
  });
});

describe('Females born 6 Aug 1951 - 5 Sep 1951, retire on 6 Jan 2013. So, getStatePensionDateAsString', () => {
  // Females born 6 Aug 1951 - 5 Sep 1951
  it('should return 2013-01-06 when a DOB of 1951-08-06 is applied to a Female', () => {
    assert.equal('2013-01-06', getStatePensionDateAsString('1951-08-06', 'F'));
  });

  it('should return 2013-01-06 when a DOB of 1951-09-05 is applied to a Female', () => {
    assert.equal('2013-01-06', getStatePensionDateAsString('1951-09-05', 'F'));
  });

  it('should NOT return 2013-01-06 when a DOB of 1951-09-05 is applied to a Male', () => {
    assert.notEqual('2013-01-06', getStatePensionDateAsString('1951-09-05', 'M'));
  });
});

describe('Females born 6 Sep 1951 - 5 Oct 1951, retire on 6 Mar 2013. So, getStatePensionDateAsString', () => {
  // Females born 6 Sep 1951 - 5 Oct 1951
  it('should return 2013-03-06 when a DOB of 1951-09-06 is applied to a Female', () => {
    assert.equal('2013-03-06', getStatePensionDateAsString('1951-09-06', 'F'));
  });

  it('should return 2013-03-06 when a DOB of 1951-10-05 is applied to a Female', () => {
    assert.equal('2013-03-06', getStatePensionDateAsString('1951-10-05', 'F'));
  });

  it('should NOT return 2013-03-06 when a DOB of 1951-10-05 is applied to a Male', () => {
    assert.notEqual('2013-03-06', getStatePensionDateAsString('1951-10-05', 'M'));
  });
});

describe('Females born 6 Oct 1951 - 5 Nov 1951, retire on 6 May 2013. So, getStatePensionDateAsString', () => {
  // Females born 6 Oct 1951 - 5 Nov 1951
  it('should return 2013-05-06 when a DOB of 1951-10-06 is applied to a Female', () => {
    assert.equal('2013-05-06', getStatePensionDateAsString('1951-10-06', 'F'));
  });

  it('should return 2013-05-06 when a DOB of 1951-11-05 is applied to a Female', () => {
    assert.equal('2013-05-06', getStatePensionDateAsString('1951-11-05', 'F'));
  });

  it('should NOT return 2013-05-06 when a DOB of 1951-11-05 is applied to a Male', () => {
    assert.notEqual('2013-05-06', getStatePensionDateAsString('1951-11-05', 'M'));
  });
});

describe('Females born 6 Nov 1951 - 5 Dec 1951, retire on 6 Jul 2013. So, getStatePensionDateAsString', () => {
  // Females born 6 Nov 1951 - 5 Dec 1951
  it('should return 2013-07-06 when a DOB of 1951-11-06 is applied to a Female', () => {
    assert.equal('2013-07-06', getStatePensionDateAsString('1951-11-06', 'F'));
  });

  it('should return 2013-07-06 when a DOB of 1951-12-05 is applied to a Female', () => {
    assert.equal('2013-07-06', getStatePensionDateAsString('1951-12-05', 'F'));
  });

  it('should NOT return 2013-07-06 when a DOB of 1951-12-05 is applied to a Male', () => {
    assert.notEqual('2013-07-06', getStatePensionDateAsString('1951-12-05', 'M'));
  });
});

describe('Females born 6 Dec 1951 - 5 Jan 1951, retire on 6 Sep 2013. So, getStatePensionDateAsString', () => {
  // Females born 6 Dec 1951 - 5 Jan 1952
  it('should return 2013-09-06 when a DOB of 1951-12-06 is applied to a Female', () => {
    assert.equal('2013-09-06', getStatePensionDateAsString('1951-12-06', 'F'));
  });

  it('should return 2013-09-06 when a DOB of 1952-01-05 is applied to a Female', () => {
    assert.equal('2013-09-06', getStatePensionDateAsString('1952-01-05', 'F'));
  });

  it('should NOT return 2013-09-06 when a DOB of 1952-01-05 is applied to a Male', () => {
    assert.notEqual('2013-09-06', getStatePensionDateAsString('1952-01-05', 'M'));
  });
});

describe('Females born 6 Jan 1952 - 5 Feb 1952, retire on 6 Nov 2013. So, getStatePensionDateAsString', () => {
  // Females born 6 Jan 1952 - 5 Feb 1952
  it('should return 2013-11-06 when a DOB of 1952-01-06 is applied to a Female', () => {
    assert.equal('2013-11-06', getStatePensionDateAsString('1952-01-06', 'F'));
  });

  it('should return 2013-11-06 when a DOB of 1952-02-05 is applied to a Female', () => {
    assert.equal('2013-11-06', getStatePensionDateAsString('1952-02-05', 'F'));
  });

  it('should NOT return 2013-11-06 when a DOB of 1952-02-05 is applied to a Male', () => {
    assert.notEqual('2013-11-06', getStatePensionDateAsString('1952-02-05', 'M'));
  });
});

describe('Females born 6 Feb 1952 - 5 Mar 1952, retire on 6 Jan 2014. So, getStatePensionDateAsString', () => {
  // Females born 6 Feb 1952 - 5 Mar 1952
  it('should return 2014-01-06 when a DOB of 1952-02-06 is applied to a Female', () => {
    assert.equal('2014-01-06', getStatePensionDateAsString('1952-02-06', 'F'));
  });

  it('should return 2014-01-06 when a DOB of 1952-03-05 is applied to a Female', () => {
    assert.equal('2014-01-06', getStatePensionDateAsString('1952-03-05', 'F'));
  });

  it('should NOT return 2014-01-06 when a DOB of 1952-03-05 is applied to a Male', () => {
    assert.notEqual('2014-01-06', getStatePensionDateAsString('1952-03-05', 'M'));
  });
});

describe('Females born 6 Mar 1952 - 5 Apr 1952, retire on 6 Mar 2014. So, getStatePensionDateAsString', () => {
  // Females born 6 Mar 1952 - 5 Apr 1952
  it('should return 2014-03-06 when a DOB of 1952-03-06 is applied to a Female', () => {
    assert.equal('2014-03-06', getStatePensionDateAsString('1952-03-06', 'F'));
  });

  it('should return 2014-03-06 when a DOB of 1952-04-05 is applied to a Female', () => {
    assert.equal('2014-03-06', getStatePensionDateAsString('1952-04-05', 'F'));
  });

  it('should NOT return 2014-03-06 when a DOB of 1952-04-05 is applied to a Male', () => {
    assert.notEqual('2014-03-06', getStatePensionDateAsString('1952-04-05', 'M'));
  });
});

describe('Females born 6 Apr 1952 - 5 May 1952, retire on 6 May 2014. So, getStatePensionDateAsString', () => {
  // Females born 6 Apr 1952 - 5 May 1952
  it('should return 2014-05-06 when a DOB of 1952-04-06 is applied to a Female', () => {
    assert.equal('2014-05-06', getStatePensionDateAsString('1952-04-06', 'F'));
  });

  it('should return 2014-05-06 when a DOB of 1952-05-05 is applied to a Female', () => {
    assert.equal('2014-05-06', getStatePensionDateAsString('1952-05-05', 'F'));
  });

  it('should NOT return 2014-05-06 when a DOB of 1952-05-05 is applied to a Male', () => {
    assert.notEqual('2014-05-06', getStatePensionDateAsString('1952-05-05', 'M'));
  });
});

describe('Females born 6 May 1952 - 5 Jun 1952, retire on 6 Jul 2014. So, getStatePensionDateAsString', () => {
  // Females born 6 May 1952 - 5 Jun 1952
  it('should return 2014-07-06 when a DOB of 1952-05-06 is applied to a Female', () => {
    assert.equal('2014-07-06', getStatePensionDateAsString('1952-05-06', 'F'));
  });

  it('should return 2014-07-06 when a DOB of 1952-06-05 is applied to a Female', () => {
    assert.equal('2014-07-06', getStatePensionDateAsString('1952-06-05', 'F'));
  });

  it('should NOT return 2014-07-06 when a DOB of 1952-06-05 is applied to a Male', () => {
    assert.notEqual('2014-07-06', getStatePensionDateAsString('1952-06-05', 'M'));
  });
});

describe('Females born 6 Jun 1952 - 5 Jul 1952, retire on 6 Sep 2014. So, getStatePensionDateAsString', () => {
  // Females born 6 Jun 1952 - 5 Jul 1952
  it('should return 2014-09-06 when a DOB of 1952-06-06 is applied to a Female', () => {
    assert.equal('2014-09-06', getStatePensionDateAsString('1952-06-06', 'F'));
  });

  it('should return 2014-09-06 when a DOB of 1952-07-05 is applied to a Female', () => {
    assert.equal('2014-09-06', getStatePensionDateAsString('1952-07-05', 'F'));
  });

  it('should NOT return 2014-09-06 when a DOB of 1952-07-05 is applied to a Male', () => {
    assert.notEqual('2014-09-06', getStatePensionDateAsString('1952-07-05', 'M'));
  });
});

describe('Females born 6 Jul 1952 - 5 Aug 1952, retire on 6 Nov 2014. So, getStatePensionDateAsString', () => {
  // Females born 6 Jul 1952 - 5 Aug 1952
  it('should return 2014-11-06 when a DOB of 1952-07-06 is applied to a Female', () => {
    assert.equal('2014-11-06', getStatePensionDateAsString('1952-07-06', 'F'));
  });

  it('should return 2014-11-06 when a DOB of 1952-08-05 is applied to a Female', () => {
    assert.equal('2014-11-06', getStatePensionDateAsString('1952-08-05', 'F'));
  });

  it('should NOT return 2014-11-06 when a DOB of 1952-08-05 is applied to a Male', () => {
    assert.notEqual('2014-11-06', getStatePensionDateAsString('1952-08-05', 'M'));
  });
});

describe('Females born 6 Aug 1952 - 5 Sep 1952, retire on 6 Jan 2015. So, getStatePensionDateAsString', () => {
  // Females born 6 Aug 1952 - 5 Sep 1952
  it('should return 2015-01-06 when a DOB of 1952-08-06 is applied to a Female', () => {
    assert.equal('2015-01-06', getStatePensionDateAsString('1952-08-06', 'F'));
  });

  it('should return 2015-01-06 when a DOB of 1952-09-05 is applied to a Female', () => {
    assert.equal('2015-01-06', getStatePensionDateAsString('1952-09-05', 'F'));
  });

  it('should NOT return 2015-01-06 when a DOB of 1952-09-05 is applied to a Male', () => {
    assert.notEqual('2015-01-06', getStatePensionDateAsString('1952-09-05', 'M'));
  });
});

describe('Females born 6 Sep 1952 - 5 Oct 1952, retire on 6 Mar 2015. So, getStatePensionDateAsString', () => {
  // Females born 6 Sep 1952 - 5 Oct 1952
  it('should return 2015-03-06 when a DOB of 1952-09-06 is applied to a Female', () => {
    assert.equal('2015-03-06', getStatePensionDateAsString('1952-09-06', 'F'));
  });

  it('should return 2015-03-06 when a DOB of 1952-10-05 is applied to a Female', () => {
    assert.equal('2015-03-06', getStatePensionDateAsString('1952-10-05', 'F'));
  });

  it('should NOT return 2015-03-06 when a DOB of 1952-10-05 is applied to a Male', () => {
    assert.notEqual('2015-03-06', getStatePensionDateAsString('1952-10-05', 'M'));
  });
});

describe('Females born 6 Oct 1952 - 5 Nov 1952, retire on 6 May 2015. So, getStatePensionDateAsString', () => {
  // Females born 6 Oct 1952 - 5 Nov 1952
  it('should return 2015-05-06 when a DOB of 1952-10-06 is applied to a Female', () => {
    assert.equal('2015-05-06', getStatePensionDateAsString('1952-10-06', 'F'));
  });

  it('should return 2015-05-06 when a DOB of 1952-11-05 is applied to a Female', () => {
    assert.equal('2015-05-06', getStatePensionDateAsString('1952-11-05', 'F'));
  });

  it('should NOT return 2015-05-06 when a DOB of 1952-11-05 is applied to a Male', () => {
    assert.notEqual('2015-05-06', getStatePensionDateAsString('1952-11-05', 'M'));
  });
});

describe('Females born 6 Nov 1952 - 5 Dec 1952, retire on 6 Jul 2015. So, getStatePensionDateAsString', () => {
  // Females born 6 Nov 1952 - 5 Dec 1952
  it('should return 2015-07-06 when a DOB of 1952-11-06 is applied to a Female', () => {
    assert.equal('2015-07-06', getStatePensionDateAsString('1952-11-06', 'F'));
  });

  it('should return 2015-07-06 when a DOB of 1952-12-05 is applied to a Female', () => {
    assert.equal('2015-07-06', getStatePensionDateAsString('1952-12-05', 'F'));
  });

  it('should NOT return 2015-07-06 when a DOB of 1952-12-05 is applied to a Male', () => {
    assert.notEqual('2015-07-06', getStatePensionDateAsString('1952-12-05', 'M'));
  });
});

describe('Females born 6 Dec 1952 - 5 Jan 1953, retire on 6 Sep 2015. So, getStatePensionDateAsString', () => {
  // Females born 6 Dec 1952 - 5 Jan 1953
  it('should return 2015-09-06 when a DOB of 1952-12-06 is applied to a Female', () => {
    assert.equal('2015-09-06', getStatePensionDateAsString('1952-12-06', 'F'));
  });

  it('should return 2015-09-06 when a DOB of 1953-01-05 is applied to a Female', () => {
    assert.equal('2015-09-06', getStatePensionDateAsString('1953-01-05', 'F'));
  });

  it('should NOT return 2015-09-06 when a DOB of 1953-01-05 is applied to a Male', () => {
    assert.notEqual('2015-09-06', getStatePensionDateAsString('1953-01-05', 'M'));
  });
});

describe('Females born 6 Jan 1953 - 5 Feb 1953, retire on 6 Nov 2015. So, getStatePensionDateAsString', () => {
  // Females born 6 Jan 1953 - 5 Feb 1953
  it('should return 2015-11-06 when a DOB of 1953-01-06 is applied to a Female', () => {
    assert.equal('2015-11-06', getStatePensionDateAsString('1953-01-06', 'F'));
  });

  it('should return 2015-11-06 when a DOB of 1953-02-05 is applied to a Female', () => {
    assert.equal('2015-11-06', getStatePensionDateAsString('1953-02-05', 'F'));
  });

  it('should NOT return 2015-11-06 when a DOB of 1953-02-05 is applied to a Male', () => {
    assert.notEqual('2015-11-06', getStatePensionDateAsString('1953-02-05', 'M'));
  });
});

describe('Females born 6 Feb 1953 - 5 Mar 1953, retire on 6 Jan 2016. So, getStatePensionDateAsString', () => {
  // Females born 6 Feb 1953 - 5 Mar 1953
  it('should return 2016-01-06 when a DOB of 1953-02-06 is applied to a Female', () => {
    assert.equal('2016-01-06', getStatePensionDateAsString('1953-02-06', 'F'));
  });

  it('should return 2016-01-06 when a DOB of 1953-03-05 is applied to a Female', () => {
    assert.equal('2016-01-06', getStatePensionDateAsString('1953-03-05', 'F'));
  });

  it('should NOT return 2016-01-06 when a DOB of 1953-03-05 is applied to a Male', () => {
    assert.notEqual('2016-01-06', getStatePensionDateAsString('1953-03-05', 'M'));
  });
});

describe('Females born 6 Mar 1953 - 5 Apr 1953, retire on 6 Mar 2016. So, getStatePensionDateAsString', () => {
  // Females born 6 Mar 1953 - 5 Apr 1953
  it('should return 2016-03-06 when a DOB of 1953-03-06 is applied to a Female', () => {
    assert.equal('2016-03-06', getStatePensionDateAsString('1953-03-06', 'F'));
  });

  it('should return 2016-03-06 when a DOB of 1953-04-05 is applied to a Female', () => {
    assert.equal('2016-03-06', getStatePensionDateAsString('1953-04-05', 'F'));
  });

  it('should NOT return 2016-03-06 when a DOB of 1953-04-05 is applied to a Male', () => {
    assert.notEqual('2016-03-06', getStatePensionDateAsString('1953-04-05', 'M'));
  });
});

describe('Females born 6 Apr 1953 - 5 May 1953, retire on 6 Jul 2016. So, getStatePensionDateAsString', () => {
  //
  // Pensions act 2011
  //
  // Females born 6 Apr 1953 - 5 May 1953
  it('should return 2016-07-06 when a DOB of 1953-04-06 is applied to a Female', () => {
    assert.equal('2016-07-06', getStatePensionDateAsString('1953-04-06', 'F'));
  });

  it('should return 2016-07-06 when a DOB of 1953-05-05 is applied to a Female', () => {
    assert.equal('2016-07-06', getStatePensionDateAsString('1953-05-05', 'F'));
  });

  it('should NOT return 2016-07-06 when a DOB of 1953-05-05 is applied to a Male', () => {
    assert.notEqual('2016-07-06', getStatePensionDateAsString('1953-05-05', 'M'));
  });
});

describe('Females born 6 May 1953 - 5 Jun 1953, retire on 6 Nov 2016. So, getStatePensionDateAsString', () => {
  // Females born 6 May 1953 - 5 Jun 1953
  it('should return 2016-11-06 when a DOB of 1953-05-06 is applied to a Female', () => {
    assert.equal('2016-11-06', getStatePensionDateAsString('1953-05-06', 'F'));
  });

  it('should return 2016-11-06 when a DOB of 1953-06-05 is applied to a Female', () => {
    assert.equal('2016-11-06', getStatePensionDateAsString('1953-06-05', 'F'));
  });

  it('should NOT return 2016-11-06 when a DOB of 1953-06-05 is applied to a Male', () => {
    assert.notEqual('2016-11-06', getStatePensionDateAsString('1953-06-05', 'M'));
  });
});

describe('Females born 6 Jun 1953 - 5 Jul 1953, retire on 6 Mar 2017. So, getStatePensionDateAsString', () => {
  // Females born 6 Jun 1953 - 5 Jul 1953
  it('should return 2017-03-06 when a DOB of 1953-06-06 is applied to a Female', () => {
    assert.equal('2017-03-06', getStatePensionDateAsString('1953-06-06', 'F'));
  });

  it('should return 2017-03-06 when a DOB of 1953-07-05 is applied to a Female', () => {
    assert.equal('2017-03-06', getStatePensionDateAsString('1953-07-05', 'F'));
  });

  it('should NOT return 2017-03-06 when a DOB of 1953-07-05 is applied to a Male', () => {
    assert.notEqual('2017-03-06', getStatePensionDateAsString('1953-07-05', 'M'));
  });
});

describe('Females born 6 Jul 1953 - 5 Aug 1953, retire on 6 Jul 2017. So, getStatePensionDateAsString', () => {
  // Females born 6 Jul 1953 - 5 Aug 1953
  it('should return 2017-07-06 when a DOB of 1953-07-06 is applied to a Female', () => {
    assert.equal('2017-07-06', getStatePensionDateAsString('1953-07-06', 'F'));
  });

  it('should return 2017-07-06 when a DOB of 1953-08-05 is applied to a Female', () => {
    assert.equal('2017-07-06', getStatePensionDateAsString('1953-08-05', 'F'));
  });

  it('should NOT return 2017-07-06 when a DOB of 1953-08-05 is applied to a Male', () => {
    assert.notEqual('2017-07-06', getStatePensionDateAsString('1953-08-05', 'M'));
  });
});

describe('Females born 6 Aug 1953 - 5 Sep 1953, retire on 6 Nov 2017. So, getStatePensionDateAsString', () => {
  // Females born 6 Aug 1953 - 5 Sep 1953
  it('should return 2017-11-06 when a DOB of 1953-08-06 is applied to a Female', () => {
    assert.equal('2017-11-06', getStatePensionDateAsString('1953-08-06', 'F'));
  });

  it('should return 2017-11-06 when a DOB of 1953-09-05 is applied to a Female', () => {
    assert.equal('2017-11-06', getStatePensionDateAsString('1953-09-05', 'F'));
  });

  it('should NOT return 2017-11-06 when a DOB of 1953-09-05 is applied to a Male', () => {
    assert.notEqual('2017-11-06', getStatePensionDateAsString('1953-09-05', 'M'));
  });
});

describe('Females born 6 Sep 1953 - 5 Oct 1953, retire on 6 Mar 2018. So, getStatePensionDateAsString', () => {
  // Females born 6 Sep 1953 - 5 Oct 1953
  it('should return 2018-03-06 when a DOB of 1953-09-06 is applied to a Female', () => {
    assert.equal('2018-03-06', getStatePensionDateAsString('1953-09-06', 'F'));
  });

  it('should return 2018-03-06 when a DOB of 1953-10-05 is applied to a Female', () => {
    assert.equal('2018-03-06', getStatePensionDateAsString('1953-10-05', 'F'));
  });

  it('should NOT return 2018-03-06 when a DOB of 1953-10-05 is applied to a Male', () => {
    assert.notEqual('2018-03-06', getStatePensionDateAsString('1953-10-05', 'M'));
  });
});

describe('Females born 6 Oct 1953 - 5 Nov 1953, retire on 6 Jul 2018. So, getStatePensionDateAsString', () => {
  // Females born 6 Oct 1953 - 5 Nov 1953
  it('should return 2018-07-06 when a DOB of 1953-10-06 is applied to a Female', () => {
    assert.equal('2018-07-06', getStatePensionDateAsString('1953-10-06', 'F'));
  });

  it('should return 2018-07-06 when a DOB of 1953-11-05 is applied to a Female', () => {
    assert.equal('2018-07-06', getStatePensionDateAsString('1953-11-05', 'F'));
  });

  it('should NOT return 2018-07-06 when a DOB of 1953-11-05 is applied to a Male', () => {
    assert.notEqual('2018-07-06', getStatePensionDateAsString('1953-11-05', 'M'));
  });
});

describe('Females born 6 Nov 1953 - 5 Dec 1953, retire on 6 Nov 2018. So, getStatePensionDateAsString', () => {
  // Females born 6 Nov 1953 - 5 Dec 1953
  it('should return 2018-11-06 when a DOB of 1953-11-06 is applied to a Female', () => {
    assert.equal('2018-11-06', getStatePensionDateAsString('1953-11-06', 'F'));
  });

  it('should return 2018-11-06 when a DOB of 1953-12-05 is applied to a Female', () => {
    assert.equal('2018-11-06', getStatePensionDateAsString('1953-12-05', 'F'));
  });

  it('should NOT return 2018-11-06 when a DOB of 1953-12-05 is applied to a Male', () => {
    assert.notEqual('2018-11-06', getStatePensionDateAsString('1953-12-05', 'M'));
  });
});

describe('All people born 6 Dec 1953 - 5 Jan 1953, retire on 6 Mar 2019. So, getStatePensionDateAsString', () => {
  // Men & Women between 6 Dec 1953 - 5 Jan 1954
  it('should return 2019-03-06 when a DOB of 1953-12-06 is applied to a Female', () => {
    assert.equal('2019-03-06', getStatePensionDateAsString('1953-12-06', 'F'));
  });

  it('should return 2019-03-06 when a DOB of 1953-12-06 is applied to a Male', () => {
    assert.equal('2019-03-06', getStatePensionDateAsString('1953-12-06', 'M'));
  });

  it('should return 2019-03-06 when a DOB of 1954-01-05 is applied to a Female', () => {
    assert.equal('2019-03-06', getStatePensionDateAsString('1954-01-05', 'F'));
  });

  it('should return 2019-03-06 when a DOB of 1954-01-05 is applied to a Male', () => {
    assert.equal('2019-03-06', getStatePensionDateAsString('1954-01-05', 'M'));
  });
});

describe('All people born 6 Jan 1953 - 5 Feb 1953, retire on 6 May 2019. So, getStatePensionDateAsString', () => {
  // Men & Women between 6 Jan 1954 - 5 Feb 1954
  it('should return 2019-05-06 when a DOB of 1954-01-06 is applied to a Female', () => {
    assert.equal('2019-05-06', getStatePensionDateAsString('1954-01-06', 'F'));
  });

  it('should return 2019-05-06 when a DOB of 1954-01-06 is applied to a Male', () => {
    assert.equal('2019-05-06', getStatePensionDateAsString('1954-01-06', 'M'));
  });

  it('should return 2019-05-06 when a DOB of 1954-01-05 is applied to a Female', () => {
    assert.equal('2019-05-06', getStatePensionDateAsString('1954-02-05', 'F'));
  });

  it('should return 2019-05-06 when a DOB of 1954-01-05 is applied to a Male', () => {
    assert.equal('2019-05-06', getStatePensionDateAsString('1954-02-05', 'M'));
  });
});

describe('All people born 6 Feb 1953 - 5 Mar 1953, retire on 6 Jul 2019. So, getStatePensionDateAsString', () => {
  // Men & Women between 6 Feb 1954 - 5 Mar 1954
  it('should return 2019-07-06 when a DOB of 1954-02-06 is applied to a Female', () => {
    assert.equal('2019-07-06', getStatePensionDateAsString('1954-02-06', 'F'));
  });

  it('should return 2019-07-06 when a DOB of 1954-02-06 is applied to a Male', () => {
    assert.equal('2019-07-06', getStatePensionDateAsString('1954-02-06', 'M'));
  });

  it('should return 2019-07-06 when a DOB of 1954-03-05 is applied to a Female', () => {
    assert.equal('2019-07-06', getStatePensionDateAsString('1954-03-05', 'F'));
  });

  it('should return 2019-07-06 when a DOB of 1954-03-05 is applied to a Male', () => {
    assert.equal('2019-07-06', getStatePensionDateAsString('1954-03-05', 'M'));
  });
});

describe('All people born 6 Mar 1953 - 5 Apr 1953, retire on 6 Sep 2019. So, getStatePensionDateAsString', () => {
  // Men & Women between 6 Mar 1954 - 5 Apr 1954
  it('should return 2019-09-06 when a DOB of 1954-03-06 is applied to a Female', () => {
    assert.equal('2019-09-06', getStatePensionDateAsString('1954-03-06', 'F'));
  });

  it('should return 2019-09-06 when a DOB of 1954-03-06 is applied to a Male', () => {
    assert.equal('2019-09-06', getStatePensionDateAsString('1954-03-06', 'M'));
  });

  it('should return 2019-09-06 when a DOB of 1954-04-05 is applied to a Female', () => {
    assert.equal('2019-09-06', getStatePensionDateAsString('1954-04-05', 'F'));
  });

  it('should return 2019-09-06 when a DOB of 1954-04-05 is applied to a Male', () => {
    assert.equal('2019-09-06', getStatePensionDateAsString('1954-04-05', 'M'));
  });
});

describe('All people born 6 Apr 1953 - 5 May 1953, retire on 6 Nov 2019. So, getStatePensionDateAsString', () => {
  // Men & Women between 6 Apr 1954 - 5 May 1954
  it('should return 2019-11-06 when a DOB of 1954-04-06 is applied to a Female', () => {
    assert.equal('2019-11-06', getStatePensionDateAsString('1954-04-06', 'F'));
  });

  it('should return 2019-11-06 when a DOB of 1954-04-06 is applied to a Male', () => {
    assert.equal('2019-11-06', getStatePensionDateAsString('1954-04-06', 'M'));
  });

  it('should return 2019-11-06 when a DOB of 1954-05-05 is applied to a Female', () => {
    assert.equal('2019-11-06', getStatePensionDateAsString('1954-05-05', 'F'));
  });

  it('should return 2019-11-06 when a DOB of 1954-05-05 is applied to a Male', () => {
    assert.equal('2019-11-06', getStatePensionDateAsString('1954-05-05', 'M'));
  });
});

describe('All people born 6 May 1953 - 5 Jun 1953, retire on 6 Jan 2020. So, getStatePensionDateAsString', () => {
  // Men & Women between 6 May 1954 - 5 Jun 1954
  it('should return 2020-01-06 when a DOB of 1954-05-06 is applied to a Female', () => {
    assert.equal('2020-01-06', getStatePensionDateAsString('1954-05-06', 'F'));
  });

  it('should return 2020-01-06 when a DOB of 1954-04-06 is applied to a Male', () => {
    assert.equal('2020-01-06', getStatePensionDateAsString('1954-05-06', 'M'));
  });

  it('should return 2020-01-06 when a DOB of 1954-06-05 is applied to a Female', () => {
    assert.equal('2020-01-06', getStatePensionDateAsString('1954-06-05', 'F'));
  });

  it('should return 2020-01-06 when a DOB of 1954-06-05 is applied to a Male', () => {
    assert.equal('2020-01-06', getStatePensionDateAsString('1954-06-05', 'M'));
  });
});

describe('All people born 6 Jun 1953 - 5 Jul 1953, retire on 6 Mar 2020. So, getStatePensionDateAsString', () => {
  // Men & Women between 6 Jun 1954 - 5 Jul 1954
  it('should return 2020-03-06 when a DOB of 1954-06-06 is applied to a Female', () => {
    assert.equal('2020-03-06', getStatePensionDateAsString('1954-06-06', 'F'));
  });

  it('should return 2020-03-06 when a DOB of 1954-06-06 is applied to a Male', () => {
    assert.equal('2020-03-06', getStatePensionDateAsString('1954-06-06', 'M'));
  });

  it('should return 2020-03-06 when a DOB of 1954-07-05 is applied to a Female', () => {
    assert.equal('2020-03-06', getStatePensionDateAsString('1954-07-05', 'F'));
  });

  it('should return 2020-03-06 when a DOB of 1954-07-05 is applied to a Male', () => {
    assert.equal('2020-03-06', getStatePensionDateAsString('1954-07-05', 'M'));
  });
});

describe('All people born 6 Jul 1953 - 5 Aug 1953, retire on 6 May 2020. So, getStatePensionDateAsString', () => {
  // Men & Women between 6 Jul 1954 - 5 Aug 1954
  it('should return 2020-05-06 when a DOB of 1954-07-06 is applied to a Female', () => {
    assert.equal('2020-05-06', getStatePensionDateAsString('1954-07-06', 'F'));
  });

  it('should return 2020-05-06 when a DOB of 1954-07-06 is applied to a Male', () => {
    assert.equal('2020-05-06', getStatePensionDateAsString('1954-07-06', 'M'));
  });

  it('should return 2020-05-06 when a DOB of 1954-08-05 is applied to a Female', () => {
    assert.equal('2020-05-06', getStatePensionDateAsString('1954-08-05', 'F'));
  });

  it('should return 2020-05-06 when a DOB of 1954-08-05 is applied to a Male', () => {
    assert.equal('2020-05-06', getStatePensionDateAsString('1954-08-05', 'M'));
  });
});

describe('All people born 6 Aug 1953 - 5 Sep 1953, retire on 6 Jul 2020. So, getStatePensionDateAsString', () => {
  // Men & Women between 6 Aug 1954 - 5 Sep 1954
  it('should return 2020-07-06 when a DOB of 1954-08-06 is applied to a Female', () => {
    assert.equal('2020-07-06', getStatePensionDateAsString('1954-08-06', 'F'));
  });

  it('should return 2020-07-06 when a DOB of 1954-08-06 is applied to a Male', () => {
    assert.equal('2020-07-06', getStatePensionDateAsString('1954-08-06', 'M'));
  });

  it('should return 2020-07-06 when a DOB of 1954-09-05 is applied to a Female', () => {
    assert.equal('2020-07-06', getStatePensionDateAsString('1954-09-05', 'F'));
  });

  it('should return 2020-07-06 when a DOB of 1954-09-05 is applied to a Male', () => {
    assert.equal('2020-07-06', getStatePensionDateAsString('1954-09-05', 'M'));
  });
});

describe('All people born 6 Sep 1953 - 5 Oct 1953, retire on 6 Sep 2020. So, getStatePensionDateAsString', () => {
  // Men & Women between 6 Sep 1954 - 5 Oct 1954
  it('should return 2020-09-06 when a DOB of 1954-09-06 is applied to a Female', () => {
    assert.equal('2020-09-06', getStatePensionDateAsString('1954-09-06', 'F'));
  });

  it('should return 2020-09-06 when a DOB of 1954-09-06 is applied to a Male', () => {
    assert.equal('2020-09-06', getStatePensionDateAsString('1954-09-06', 'M'));
  });

  it('should return 2020-09-06 when a DOB of 1954-10-05 is applied to a Female', () => {
    assert.equal('2020-09-06', getStatePensionDateAsString('1954-10-05', 'F'));
  });

  it('should return 2020-09-06 when a DOB of 1954-10-05 is applied to a Male', () => {
    assert.equal('2020-09-06', getStatePensionDateAsString('1954-10-05', 'M'));
  });
});

describe('All people born 6 Oct 1953 - 5 Apr 1960, retire on their 66th birthday. So, getStatePensionDateAsString', () => {
  // Men & Women between 6 Oct 1954 - 5 Apr 1960
  it('should return 2020-10-06 when a DOB of 1954-10-06 is applied to a Female', () => {
    assert.equal('2020-10-06', getStatePensionDateAsString('1954-10-06', 'F'));
  });

  it('should return 2020-10-06 when a DOB of 1954-10-06 is applied to a Male', () => {
    assert.equal('2020-10-06', getStatePensionDateAsString('1954-10-06', 'M'));
  });

  it('should return 2026-04-05 when a DOB of 1960-04-05 is applied to a Female', () => {
    assert.equal('2026-04-05', getStatePensionDateAsString('1960-04-05', 'F'));
  });

  it('should return 2026-04-05 when a DOB of 1960-04-05 is applied to a Male', () => {
    assert.equal('2026-04-05', getStatePensionDateAsString('1960-04-05', 'M'));
  });

  // Leap day 29 Feb 1956
  it('should return 2022-03-01 when a DOB of 1956-02-29 (leap day) is applied to a Female', () => {
    assert.equal('2022-03-01', getStatePensionDateAsString('1956-02-29', 'F'));
  });

  it('should return 2022-03-01 when a DOB of 1956-02-29 (leap day) is applied to a Male', () => {
    assert.equal('2022-03-01', getStatePensionDateAsString('1956-02-29', 'M'));
  });
});

describe('All people born 6 Apr 1960 - 5 May 1960, retire after 66 years and 1 month. So, getStatePensionDateAsString', () => {
  //
  // Pensions act 2014
  //
  // Men & Women between 6 Apr 1960 - 5 May 1960
  it('should return 2026-05-06 when a DOB of 1960-04-06 is applied to a Female', () => {
    assert.equal('2026-05-06', getStatePensionDateAsString('1960-04-06', 'F'));
  });

  it('should return 2026-05-06 when a DOB of 1960-04-06 is applied to a Male', () => {
    assert.equal('2026-05-06', getStatePensionDateAsString('1960-04-06', 'M'));
  });

  it('should return 2026-06-05 when a DOB of 1960-05-05 is applied to a Female', () => {
    assert.equal('2026-06-05', getStatePensionDateAsString('1960-05-05', 'F'));
  });

  it('should return 2026-06-56 when a DOB of 1960-05-05 is applied to a Male', () => {
    assert.equal('2026-06-05', getStatePensionDateAsString('1960-05-05', 'M'));
  });
});

describe('All people born 6 May 1960 - 5 Jun 1960, retire after 66 years and 2 months. So, getStatePensionDateAsString', () => {
  // Men & Women between 6 May 1960 - 5 Jun 1960
  it('should return 2026-07-06 when a DOB of 1960-05-06 is applied to a Female', () => {
    assert.equal('2026-07-06', getStatePensionDateAsString('1960-05-06', 'F'));
  });

  it('should return 2026-07-06 when a DOB of 1960-05-06 is applied to a Male', () => {
    assert.equal('2026-07-06', getStatePensionDateAsString('1960-05-06', 'M'));
  });

  it('should return 2026-08-05 when a DOB of 1960-06-05 is applied to a Female', () => {
    assert.equal('2026-08-05', getStatePensionDateAsString('1960-06-05', 'F'));
  });

  it('should return 2026-08-05 when a DOB of 1960-06-05 is applied to a Male', () => {
    assert.equal('2026-08-05', getStatePensionDateAsString('1960-06-05', 'M'));
  });
});

describe('All people born 6 Jun 1960 - 5 Jul 1960, retire after 66 years and 3 months. So, getStatePensionDateAsString', () => {
  // Men & Women between 6 Jun 1960 - 5 Jul 1960
  it('should return 2026-09-06 when a DOB of 1960-06-06 is applied to a Female', () => {
    assert.equal('2026-09-06', getStatePensionDateAsString('1960-06-06', 'F'));
  });

  it('should return 2026-09-06 when a DOB of 1960-06-06 is applied to a Male', () => {
    assert.equal('2026-09-06', getStatePensionDateAsString('1960-06-06', 'M'));
  });

  it('should return 2026-10-05 when a DOB of 1960-07-05 is applied to a Female', () => {
    assert.equal('2026-10-05', getStatePensionDateAsString('1960-07-05', 'F'));
  });

  it('should return 2026-10-05 when a DOB of 1960-07-05 is applied to a Male', () => {
    assert.equal('2026-10-05', getStatePensionDateAsString('1960-07-05', 'M'));
  });
});

describe('All people born 6 Jul 1960 - 5 Aug 1960, retire after 66 years and 4 months. So, getStatePensionDateAsString', () => {
  // Men & Women between 6 Jul 1960 - 5 Aug 1960
  it('should return 2026-11-06 when a DOB of 1960-07-06 is applied to a Female', () => {
    assert.equal('2026-11-06', getStatePensionDateAsString('1960-07-06', 'F'));
  });

  it('should return 2026-11-06 when a DOB of 1960-07-06 is applied to a Male', () => {
    assert.equal('2026-11-06', getStatePensionDateAsString('1960-07-06', 'M'));
  });

  it('should return 2026-11-30 when a DOB of 1960-07-31 is applied to a Female', () => {
    assert.equal('2026-11-30', getStatePensionDateAsString('1960-07-31', 'F'));
  });

  it('should return 2026-11-30 when a DOB of 1960-07-31 is applied to a Male', () => {
    assert.equal('2026-11-30', getStatePensionDateAsString('1960-07-31', 'M'));
  });

  it('should return 2026-12-05 when a DOB of 1960-08-05 is applied to a Female', () => {
    assert.equal('2026-12-05', getStatePensionDateAsString('1960-08-05', 'F'));
  });

  it('should return 2026-12-05 when a DOB of 1960-08-05 is applied to a Male', () => {
    assert.equal('2026-12-05', getStatePensionDateAsString('1960-08-05', 'M'));
  });
});

describe('All people born 6 Aug 1960 - 5 Sep 1960, retire after 66 years and 5 months. So, getStatePensionDateAsString', () => {
  // Men & Women between 6 Aug 1960 - 5 Sep 1960
  it('should return 2027-01-06 when a DOB of 1960-08-06 is applied to a Female', () => {
    assert.equal('2027-01-06', getStatePensionDateAsString('1960-08-06', 'F'));
  });

  it('should return 2027-01-06 when a DOB of 1960-08-06 is applied to a Male', () => {
    assert.equal('2027-01-06', getStatePensionDateAsString('1960-08-06', 'M'));
  });

  it('should return 2027-02-05 when a DOB of 1960-09-05 is applied to a Female', () => {
    assert.equal('2027-02-05', getStatePensionDateAsString('1960-09-05', 'F'));
  });

  it('should return 2027-02-05 when a DOB of 1960-09-05 is applied to a Male', () => {
    assert.equal('2027-02-05', getStatePensionDateAsString('1960-09-05', 'M'));
  });
});

describe('All people born 6 Sep 1960 - 5 Oct 1960, retire after 66 years and 6 months. So, getStatePensionDateAsString', () => {
  // Men & Women between 6 Sep 1960 - 5 Oct 1960
  it('should return 2027-03-06 when a DOB of 1960-09-06 is applied to a Female', () => {
    assert.equal('2027-03-06', getStatePensionDateAsString('1960-09-06', 'F'));
  });

  it('should return 2027-03-06 when a DOB of 1960-09-06 is applied to a Male', () => {
    assert.equal('2027-03-06', getStatePensionDateAsString('1960-09-06', 'M'));
  });

  it('should return 2027-04-05 when a DOB of 1960-10-05 is applied to a Female', () => {
    assert.equal('2027-04-05', getStatePensionDateAsString('1960-10-05', 'F'));
  });

  it('should return 2027-04-05 when a DOB of 1960-10-05 is applied to a Male', () => {
    assert.equal('2027-04-05', getStatePensionDateAsString('1960-10-05', 'M'));
  });
});

describe('All people born 6 Oct 1960 - 5 Nov 1960, retire after 66 years and 7 months. So, getStatePensionDateAsString', () => {
  // Men & Women between 6 Oct 1960 - 5 Nov 1960
  it('should return 2027-05-06 when a DOB of 1960-10-06 is applied to a Female', () => {
    assert.equal('2027-05-06', getStatePensionDateAsString('1960-10-06', 'F'));
  });

  it('should return 2027-05-06 when a DOB of 1960-10-06 is applied to a Male', () => {
    assert.equal('2027-05-06', getStatePensionDateAsString('1960-10-06', 'M'));
  });

  it('should return 2027-06-05 when a DOB of 1960-11-05 is applied to a Female', () => {
    assert.equal('2027-06-05', getStatePensionDateAsString('1960-11-05', 'F'));
  });

  it('should return 2027-06-05 when a DOB of 1960-11-05 is applied to a Male', () => {
    assert.equal('2027-06-05', getStatePensionDateAsString('1960-11-05', 'M'));
  });
});

describe('All people born 6 Nov 1960 - 5 Dec 1960, retire after 66 years and 8 months. So, getStatePensionDateAsString', () => {
  // Men & Women between 6 Nov 1960 - 5 Dec 1960
  it('should return 2027-07-06 when a DOB of 1960-11-06 is applied to a Female', () => {
    assert.equal('2027-07-06', getStatePensionDateAsString('1960-11-06', 'F'));
  });

  it('should return 2027-07-06 when a DOB of 1960-11-06 is applied to a Male', () => {
    assert.equal('2027-07-06', getStatePensionDateAsString('1960-11-06', 'M'));
  });

  it('should return 2027-08-05 when a DOB of 1960-12-05 is applied to a Female', () => {
    assert.equal('2027-08-05', getStatePensionDateAsString('1960-12-05', 'F'));
  });

  it('should return 2027-08-05 when a DOB of 1960-12-05 is applied to a Male', () => {
    assert.equal('2027-08-05', getStatePensionDateAsString('1960-12-05', 'M'));
  });
});

describe('All people born 6 Dec 1961 - 5 Jan 1961, retire after 66 years and 9 months. So, getStatePensionDateAsString', () => {
  // Men & Women between 6 Dec 1960 - 5 Jan 1961
  it('should return 2027-09-06 when a DOB of 1960-12-06 is applied to a Female', () => {
    assert.equal('2027-09-06', getStatePensionDateAsString('1960-12-06', 'F'));
  });

  it('should return 2027-09-06 when a DOB of 1960-12-06 is applied to a Male', () => {
    assert.equal('2027-09-06', getStatePensionDateAsString('1960-12-06', 'M'));
  });

  it('should return 2027-09-30 when a DOB of 1960-12-31 is applied to a Female', () => {
    assert.equal('2027-09-30', getStatePensionDateAsString('1960-12-31', 'F'));
  });

  it('should return 2027-09-30 when a DOB of 1960-12-31 is applied to a Male', () => {
    assert.equal('2027-09-30', getStatePensionDateAsString('1960-12-31', 'M'));
  });

  it('should return 2027-10-05 when a DOB of 1961-01-05 is applied to a Female', () => {
    assert.equal('2027-10-05', getStatePensionDateAsString('1961-01-05', 'F'));
  });

  it('should return 2027-10-05 when a DOB of 1961-01-05 is applied to a Male', () => {
    assert.equal('2027-10-05', getStatePensionDateAsString('1961-01-05', 'M'));
  });
});

describe('All people born 6 Jan 1961 - 5 Feb 1961, retire after 66 years and 10 months. So, getStatePensionDateAsString', () => {
  // Men & Women between 6 Jan 1961 - 5 Feb 1961
  it('should return 2027-11-06 when a DOB of 1961-01-06 is applied to a Female', () => {
    assert.equal('2027-11-06', getStatePensionDateAsString('1961-01-06', 'F'));
  });

  it('should return 2027-11-06 when a DOB of 1961-01-06 is applied to a Male', () => {
    assert.equal('2027-11-06', getStatePensionDateAsString('1961-01-06', 'M'));
  });

  it('should return 2027-11-30 when a DOB of 1961-01-31 is applied to a Female', () => {
    assert.equal('2027-11-30', getStatePensionDateAsString('1961-01-31', 'F'));
  });

  it('should return 2027-11-30 when a DOB of 1961-01-31 is applied to a Male', () => {
    assert.equal('2027-11-30', getStatePensionDateAsString('1961-01-31', 'M'));
  });

  it('should return 2027-12-05 when a DOB of 1961-02-05 is applied to a Female', () => {
    assert.equal('2027-12-05', getStatePensionDateAsString('1961-02-05', 'F'));
  });

  it('should return 2027-12-05 when a DOB of 1961-02-05 is applied to a Male', () => {
    assert.equal('2027-12-05', getStatePensionDateAsString('1961-02-05', 'M'));
  });
});

describe('All people born 6 Feb 1961 - 5 Mar 1961, retire after 66 years and 11 months. So, getStatePensionDateAsString', () => {
  // Men & Women between 6 Feb 1961 - 5 Mar 1961
  it('should return 2028-01-06 when a DOB of 1961-02-06 is applied to a Female', () => {
    assert.equal('2028-01-06', getStatePensionDateAsString('1961-02-06', 'F'));
  });

  it('should return 2028-01-06 when a DOB of 1961-02-06 is applied to a Male', () => {
    assert.equal('2028-01-06', getStatePensionDateAsString('1961-02-06', 'M'));
  });

  it('should return 2028-02-05 when a DOB of 1961-03-05 is applied to a Female', () => {
    assert.equal('2028-02-05', getStatePensionDateAsString('1961-03-05', 'F'));
  });

  it('should return 2028-02-05 when a DOB of 1961-03-05 is applied to a Male', () => {
    assert.equal('2028-02-05', getStatePensionDateAsString('1961-03-05', 'M'));
  });
});

describe('All people born 6 Mar 1961 - 5 Apr 1977, retire on their 67th birthday. So, getStatePensionDateAsString', () => {
  // Men & Women between 6 Mar 1961 - 5 Apr 1977
  it('should return 2028-03-06 when a DOB of 1961-03-06 is applied to a Female', () => {
    assert.equal('2028-03-06', getStatePensionDateAsString('1961-03-06', 'F'));
  });

  it('should return 2028-03-06 when a DOB of 1961-03-06 is applied to a Male', () => {
    assert.equal('2028-03-06', getStatePensionDateAsString('1961-03-06', 'M'));
  });

  it('should return 2044-04-05 when a DOB of 1977-04-05 is applied to a Female', () => {
    assert.equal('2044-04-05', getStatePensionDateAsString('1977-04-05', 'F'));
  });

  it('should return 2044-04-05 when a DOB of 1977-04-05 is applied to a Male', () => {
    assert.equal('2044-04-05', getStatePensionDateAsString('1977-04-05', 'M'));
  });
});

describe('All people born 6 Apr 1977 - 5 May 1977, retire on 6 May 2044. So, getStatePensionDateAsString', () => {
  //
  // Pensions act 2007
  //
  // Men & Women between 6 Apr 1977 - 5 May 1977
  it('should return 2044-05-06 when a DOB of 1977-04-06 is applied to a Female', () => {
    assert.equal('2044-05-06', getStatePensionDateAsString('1977-04-06', 'F'));
  });

  it('should return 2044-05-06 when a DOB of 1977-04-06 is applied to a Male', () => {
    assert.equal('2044-05-06', getStatePensionDateAsString('1977-04-06', 'M'));
  });

  it('should return 2044-05-06 when a DOB of 1977-05-05 is applied to a Female', () => {
    assert.equal('2044-05-06', getStatePensionDateAsString('1977-05-05', 'F'));
  });

  it('should return 2044-05-06 when a DOB of 1977-05-05 is applied to a Male', () => {
    assert.equal('2044-05-06', getStatePensionDateAsString('1977-05-05', 'M'));
  });
});

describe('All people born 6 May 1977 - 5 Jun 1977, retire on 6 Jul 2044. So, getStatePensionDateAsString', () => {
  // Men & Women between 6 May 1977 - 5 Jun 1977
  it('should return 2044-07-06 when a DOB of 1977-05-06 is applied to a Female', () => {
    assert.equal('2044-07-06', getStatePensionDateAsString('1977-05-06', 'F'));
  });

  it('should return 2044-07-06 when a DOB of 1977-05-06 is applied to a Male', () => {
    assert.equal('2044-07-06', getStatePensionDateAsString('1977-05-06', 'M'));
  });

  it('should return 2044-07-06 when a DOB of 1977-06-05 is applied to a Female', () => {
    assert.equal('2044-07-06', getStatePensionDateAsString('1977-06-05', 'F'));
  });

  it('should return 2044-07-06 when a DOB of 1977-06-05 is applied to a Male', () => {
    assert.equal('2044-07-06', getStatePensionDateAsString('1977-06-05', 'M'));
  });
});

describe('All people born 6 Jun 1977 - 5 Jul 1977, retire on 6 Sep 2044. So, getStatePensionDateAsString', () => {
  // Men & Women between 6 Jun 1977 - 5 Jul 1977
  it('should return 2044-09-06 when a DOB of 1977-06-06 is applied to a Female', () => {
    assert.equal('2044-09-06', getStatePensionDateAsString('1977-06-06', 'F'));
  });

  it('should return 2044-09-06 when a DOB of 1977-06-06 is applied to a Male', () => {
    assert.equal('2044-09-06', getStatePensionDateAsString('1977-06-06', 'M'));
  });

  it('should return 2044-09-06 when a DOB of 1977-07-05 is applied to a Female', () => {
    assert.equal('2044-09-06', getStatePensionDateAsString('1977-07-05', 'F'));
  });

  it('should return 2044-09-06 when a DOB of 1977-07-05 is applied to a Male', () => {
    assert.equal('2044-09-06', getStatePensionDateAsString('1977-07-05', 'M'));
  });
});

describe('All people born 6 Jul 1977 - 5 Aug 1977, retire on 6 Nov 2044. So, getStatePensionDateAsString', () => {
  // Men & Women between 6 Jul 1977 - 5 Aug 1977
  it('should return 2044-11-06 when a DOB of 1977-07-06 is applied to a Female', () => {
    assert.equal('2044-11-06', getStatePensionDateAsString('1977-07-06', 'F'));
  });

  it('should return 2044-11-06 when a DOB of 1977-07-06 is applied to a Male', () => {
    assert.equal('2044-11-06', getStatePensionDateAsString('1977-07-06', 'M'));
  });

  it('should return 2044-11-06 when a DOB of 1977-08-05 is applied to a Female', () => {
    assert.equal('2044-11-06', getStatePensionDateAsString('1977-08-05', 'F'));
  });

  it('should return 2044-11-06 when a DOB of 1977-08-05 is applied to a Male', () => {
    assert.equal('2044-11-06', getStatePensionDateAsString('1977-08-05', 'M'));
  });
});

describe('All people born 6 Aug 1977 - 5 Sep 1977, retire on 6 Jan 2045. So, getStatePensionDateAsString', () => {
  // Men & Women between 6 Aug 1977 - 5 Sep 1977
  it('should return 2045-01-06 when a DOB of 1977-08-06 is applied to a Female', () => {
    assert.equal('2045-01-06', getStatePensionDateAsString('1977-08-06', 'F'));
  });

  it('should return 2045-01-06 when a DOB of 1977-08-06 is applied to a Male', () => {
    assert.equal('2045-01-06', getStatePensionDateAsString('1977-08-06', 'M'));
  });

  it('should return 2045-01-06 when a DOB of 1977-09-05 is applied to a Female', () => {
    assert.equal('2045-01-06', getStatePensionDateAsString('1977-09-05', 'F'));
  });

  it('should return 2045-01-06 when a DOB of 1977-09-05 is applied to a Male', () => {
    assert.equal('2045-01-06', getStatePensionDateAsString('1977-09-05', 'M'));
  });
});

describe('All people born 6 Sep 1977 - 5 Oct 1977, retire on 6 Mar 2045. So, getStatePensionDateAsString', () => {
  // Men & Women between 6 Sep 1977 - 5 Oct 1977
  it('should return 2045-03-06 when a DOB of 1977-09-06 is applied to a Female', () => {
    assert.equal('2045-03-06', getStatePensionDateAsString('1977-09-06', 'F'));
  });

  it('should return 2045-03-06 when a DOB of 1977-09-06 is applied to a Male', () => {
    assert.equal('2045-03-06', getStatePensionDateAsString('1977-09-06', 'M'));
  });

  it('should return 2045-03-06 when a DOB of 1977-10-05 is applied to a Female', () => {
    assert.equal('2045-03-06', getStatePensionDateAsString('1977-10-05', 'F'));
  });

  it('should return 2045-03-06 when a DOB of 1977-10-05 is applied to a Male', () => {
    assert.equal('2045-03-06', getStatePensionDateAsString('1977-10-05', 'M'));
  });
});

describe('All people born 6 Oct 1977 - 5 Nov 1977, retire on 6 May 2045. So, getStatePensionDateAsString', () => {
  // Men & Women between 6 Oct 1977 - 5 Nov 1977
  it('should return 2045-05-06 when a DOB of 1977-10-06 is applied to a Female', () => {
    assert.equal('2045-05-06', getStatePensionDateAsString('1977-10-06', 'F'));
  });

  it('should return 2045-05-06 when a DOB of 1977-10-06 is applied to a Male', () => {
    assert.equal('2045-05-06', getStatePensionDateAsString('1977-10-06', 'M'));
  });

  it('should return 2045-05-06 when a DOB of 1977-11-05 is applied to a Female', () => {
    assert.equal('2045-05-06', getStatePensionDateAsString('1977-11-05', 'F'));
  });

  it('should return 2045-05-06 when a DOB of 1977-11-05 is applied to a Male', () => {
    assert.equal('2045-05-06', getStatePensionDateAsString('1977-11-05', 'M'));
  });
});

describe('All people born 6 Nov 1977 - 5 Dec 1977, retire on 6 Jul 2045. So, getStatePensionDateAsString', () => {
  // Men & Women between 6 Nov 1977 - 5 Dec 1977
  it('should return 2045-07-06 when a DOB of 1977-11-06 is applied to a Female', () => {
    assert.equal('2045-07-06', getStatePensionDateAsString('1977-11-06', 'F'));
  });

  it('should return 2045-07-06 when a DOB of 1977-11-06 is applied to a Male', () => {
    assert.equal('2045-07-06', getStatePensionDateAsString('1977-11-06', 'M'));
  });

  it('should return 2045-07-06 when a DOB of 1977-12-05 is applied to a Female', () => {
    assert.equal('2045-07-06', getStatePensionDateAsString('1977-12-05', 'F'));
  });

  it('should return 2045-07-06 when a DOB of 1977-12-05 is applied to a Male', () => {
    assert.equal('2045-07-06', getStatePensionDateAsString('1977-12-05', 'M'));
  });
});

describe('All people born 6 Dec 1977 - 5 Jan 1977, retire on 6 Sep 2045. So, getStatePensionDateAsString', () => {
  // Men & Women between 6 Dec 1977 - 5 Jan 1978
  it('should return 2045-09-06 when a DOB of 1977-12-06 is applied to a Female', () => {
    assert.equal('2045-09-06', getStatePensionDateAsString('1977-12-06', 'F'));
  });

  it('should return 2045-09-06 when a DOB of 1977-12-06 is applied to a Male', () => {
    assert.equal('2045-09-06', getStatePensionDateAsString('1977-12-06', 'M'));
  });

  it('should return 2045-09-06 when a DOB of 1978-01-05 is applied to a Female', () => {
    assert.equal('2045-09-06', getStatePensionDateAsString('1978-01-05', 'F'));
  });

  it('should return 2045-09-06 when a DOB of 1978-01-05 is applied to a Male', () => {
    assert.equal('2045-09-06', getStatePensionDateAsString('1978-01-05', 'M'));
  });
});

describe('All people born 6 Jan 1978 - 5 Feb 1978, retire on 6 Nov 2045. So, getStatePensionDateAsString', () => {
  // Men & Women between 6 Jan 1978 - 5 Feb 1978
  it('should return 2045-11-06 when a DOB of 1978-01-06 is applied to a Female', () => {
    assert.equal('2045-11-06', getStatePensionDateAsString('1978-01-06', 'F'));
  });

  it('should return 2045-11-06 when a DOB of 1978-01-06 is applied to a Male', () => {
    assert.equal('2045-11-06', getStatePensionDateAsString('1978-01-06', 'M'));
  });

  it('should return 2045-11-06 when a DOB of 1978-02-05 is applied to a Female', () => {
    assert.equal('2045-11-06', getStatePensionDateAsString('1978-02-05', 'F'));
  });

  it('should return 2045-11-06 when a DOB of 1978-02-05 is applied to a Male', () => {
    assert.equal('2045-11-06', getStatePensionDateAsString('1978-02-05', 'M'));
  });
});

describe('All people born 6 Feb 1978 - 5 Mar 1978, retire on 6 Jan 2046. So, getStatePensionDateAsString', () => {
  // Men & Women between 6 Feb 1978 - 5 Mar 1978
  it('should return 2046-01-06 when a DOB of 1978-02-06 is applied to a Female', () => {
    assert.equal('2046-01-06', getStatePensionDateAsString('1978-02-06', 'F'));
  });

  it('should return 2046-01-06 when a DOB of 1978-02-06 is applied to a Male', () => {
    assert.equal('2046-01-06', getStatePensionDateAsString('1978-02-06', 'M'));
  });

  it('should return 2046-01-06 when a DOB of 1978-03-05 is applied to a Female', () => {
    assert.equal('2046-01-06', getStatePensionDateAsString('1978-03-05', 'F'));
  });

  it('should return 2046-01-06 when a DOB of 1978-03-05 is applied to a Male', () => {
    assert.equal('2046-01-06', getStatePensionDateAsString('1978-03-05', 'M'));
  });
});

describe('All people born 6 Mar 1978 - 5 Apr 1978, retire on 6 Mar 2046. So, getStatePensionDateAsString', () => {
  // Men & Women between 6 Mar 1978 - 5 Apr 1978
  it('should return 2046-03-06 when a DOB of 1978-03-06 is applied to a Female', () => {
    assert.equal('2046-03-06', getStatePensionDateAsString('1978-03-06', 'F'));
  });

  it('should return 2046-03-06 when a DOB of 1978-03-06 is applied to a Male', () => {
    assert.equal('2046-03-06', getStatePensionDateAsString('1978-03-06', 'M'));
  });

  it('should return 2046-03-06 when a DOB of 1978-04-05 is applied to a Female', () => {
    assert.equal('2046-03-06', getStatePensionDateAsString('1978-04-05', 'F'));
  });

  it('should return 2046-03-06 when a DOB of 1978-04-05 is applied to a Male', () => {
    assert.equal('2046-03-06', getStatePensionDateAsString('1978-04-05', 'M'));
  });
});

describe('All people born 6 Apr 1978 - onwards, retire on their 68th birthday. So, getStatePensionDateAsString', () => {
  // Men & Women between 6 Apr 1978 - onwards
  it('should return 2046-04-06 when a DOB of 1978-04-06 is applied to a Female', () => {
    assert.equal('2046-04-06', getStatePensionDateAsString('1978-04-06', 'F'));
  });

  it('should return 2046-04-06 when a DOB of 1978-04-06 is applied to a Male', () => {
    assert.equal('2046-04-06', getStatePensionDateAsString('1978-04-06', 'M'));
  });

  // Random future date - 29 Feb 2020
  it('should return 2088-02-29 when a DOB of 2020-02-29 is applied to a Female', () => {
    assert.equal('2088-02-29', getStatePensionDateAsString('2020-02-29', 'F'));
  });

  it('should return 2088-02-29 when a DOB of 2020-02-29 is applied to a Male', () => {
    assert.equal('2088-02-29', getStatePensionDateAsString('2020-02-29', 'M'));
  });
});

describe('When the date does not match an entry in the spa data', () => {
  const testFunction = {
    pensionAgeData() {
      return [{
        periodStart: '',
        periodEnd: '1980-04-05',
        gender: 'F',
        pensionDate: {
          type: 'bad-data',
          years: 60,
          months: 0
        }
      }];
    }
  };
  it('should return a type error', () => {
    const {getStatePensionDate} = proxyquire('../src/get-state-pension-date', {'../src/spa-data': testFunction});
    assert.throws(() => getStatePensionDate('1978-04-06', 'F'), TypeError);
  });
});

describe('When the date does not match an entry in the spa data', () => {
  const testFunction = {
    pensionAgeData() {
      return [];
    }
  };
  it('should return a type error', () => {
    const {getStatePensionDate} = proxyquire('../src/get-state-pension-date', {'../src/spa-data': testFunction});
    assert.equal(getStatePensionDate('1978-04-06', 'F'), undefined);
  });
});

describe('When the date does not match an entry in the spa data', () => {
  const testFunction = {
    pensionAgeData() {
      return [];
    }
  };
  it('should return a type error', () => {
    const {getStatePensionDateAsString} = proxyquire('../src/get-state-pension-date', {'../src/spa-data': testFunction});
    assert.equal(getStatePensionDateAsString('1978-04-06', 'F'), undefined);
  });
});
