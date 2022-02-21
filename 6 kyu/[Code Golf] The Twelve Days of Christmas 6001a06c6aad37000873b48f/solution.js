x='\n'
f=_=>'FirstSecondThirdFourthFifthSixthSeventhEighthNinthTenthEleventhTwelfth'.split(/(?=[A-Z])/).map((n,i)=>`On the ${n} day of Christmas
My true love sent to me
${`Twelve drummers drumming,|Eleven pipers piping,|Ten lords a-leaping,|Nine ladies dancing,|Eight maids a-milking,|Seven swans a-swimming,|Six geese a-laying,|Five gold rings,|Four calling birds,|Three French hens,|Two turtle doves, and|A partridge in a pear tree.`.split('|').slice(-(i+1)).join(x)}`).join(x+x)

/*
    Possible further optimizations:
        Generate cardinals and ordinals from one source
        Use different logic to split list of gifts, similar to regex split on ordinal list

*/

// Tests
const fs = require('fs');
const getCodeLength = require('../../helpers/js/codelength');

console.log('Running given sample tests; no further output indicates success');
console.assert(`On the First day of Christmas
My true love sent to me
A partridge in a pear tree.

On the Second day of Christmas
My true love sent to me
Two turtle doves, and
A partridge in a pear tree.

On the Third day of Christmas
My true love sent to me
Three French hens,
Two turtle doves, and
A partridge in a pear tree.

On the Fourth day of Christmas
My true love sent to me
Four calling birds,
Three French hens,
Two turtle doves, and
A partridge in a pear tree.

On the Fifth day of Christmas
My true love sent to me
Five gold rings,
Four calling birds,
Three French hens,
Two turtle doves, and
A partridge in a pear tree.

On the Sixth day of Christmas
My true love sent to me
Six geese a-laying,
Five gold rings,
Four calling birds,
Three French hens,
Two turtle doves, and
A partridge in a pear tree.

On the Seventh day of Christmas
My true love sent to me
Seven swans a-swimming,
Six geese a-laying,
Five gold rings,
Four calling birds,
Three French hens,
Two turtle doves, and
A partridge in a pear tree.

On the Eighth day of Christmas
My true love sent to me
Eight maids a-milking,
Seven swans a-swimming,
Six geese a-laying,
Five gold rings,
Four calling birds,
Three French hens,
Two turtle doves, and
A partridge in a pear tree.

On the Ninth day of Christmas
My true love sent to me
Nine ladies dancing,
Eight maids a-milking,
Seven swans a-swimming,
Six geese a-laying,
Five gold rings,
Four calling birds,
Three French hens,
Two turtle doves, and
A partridge in a pear tree.

On the Tenth day of Christmas
My true love sent to me
Ten lords a-leaping,
Nine ladies dancing,
Eight maids a-milking,
Seven swans a-swimming,
Six geese a-laying,
Five gold rings,
Four calling birds,
Three French hens,
Two turtle doves, and
A partridge in a pear tree.

On the Eleventh day of Christmas
My true love sent to me
Eleven pipers piping,
Ten lords a-leaping,
Nine ladies dancing,
Eight maids a-milking,
Seven swans a-swimming,
Six geese a-laying,
Five gold rings,
Four calling birds,
Three French hens,
Two turtle doves, and
A partridge in a pear tree.

On the Twelfth day of Christmas
My true love sent to me
Twelve drummers drumming,
Eleven pipers piping,
Ten lords a-leaping,
Nine ladies dancing,
Eight maids a-milking,
Seven swans a-swimming,
Six geese a-laying,
Five gold rings,
Four calling birds,
Three French hens,
Two turtle doves, and
A partridge in a pear tree.` === f());

const codeLength = getCodeLength(__filename);
console.assert(codeLength <= 510, 'Your code was %s characters, it should be <= 510', codeLength);