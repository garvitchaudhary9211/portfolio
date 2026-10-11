export type BaseType = 2 | 8 | 10 | 16;

export interface ConversionResult {
  success: boolean;
  result: string;
  error?: string;
  sourceBase: BaseType;
  targetBase: BaseType;
  decimalValue?: string;
  isNegative?: boolean;
  digitBreakdown?: { digit: string; power: number; value: string }[];
}

const DIGIT_CHARS: Record<BaseType, RegExp> = {
  2: /^[0-1]$/,
  8: /^[0-7]$/,
  10: /^[0-9]$/,
  16: /^[0-9a-fA-F]$/,
};

const BASE_NAMES: Record<BaseType, string> = {
  2: 'Binary (Base 2)',
  8: 'Octal (Base 8)',
  10: 'Decimal (Base 10)',
  16: 'Hexadecimal (Base 16)',
};

export function getBaseName(base: BaseType): string {
  return BASE_NAMES[base];
}

/**
 * Validates and converts an integer string from sourceBase to targetBase using BigInt
 */
export function convertNumber(
  input: string,
  sourceBase: BaseType,
  targetBase: BaseType
): ConversionResult {
  const trimmed = input.trim();

  if (!trimmed) {
    return {
      success: false,
      result: '',
      error: 'Please enter a number to convert.',
      sourceBase,
      targetBase,
    };
  }

  // Check for fractional/decimal points
  if (trimmed.includes('.') || trimmed.includes(',')) {
    return {
      success: false,
      result: '',
      error: 'Only integer numbers are supported. Floating-point fractions are not supported.',
      sourceBase,
      targetBase,
    };
  }

  // Handle negative sign
  let isNegative = false;
  let digits = trimmed;
  if (digits.startsWith('-')) {
    isNegative = true;
    digits = digits.slice(1).trim();
  } else if (digits.startsWith('+')) {
    digits = digits.slice(1).trim();
  }

  if (!digits) {
    return {
      success: false,
      result: '',
      error: 'Please enter valid digits after the sign.',
      sourceBase,
      targetBase,
    };
  }

  // Validate each character against source base
  const validator = DIGIT_CHARS[sourceBase];
  for (let i = 0; i < digits.length; i++) {
    const char = digits[i];
    if (!validator.test(char)) {
      return {
        success: false,
        result: '',
        error: `Invalid character '${char}' at position ${i + 1} for ${BASE_NAMES[sourceBase]}.`,
        sourceBase,
        targetBase,
      };
    }
  }

  try {
    // Parse to BigInt using step-by-step radix arithmetic to avoid standard parser prefix limitations
    const baseBig = BigInt(sourceBase);
    let decimalBig = 0n;

    for (let i = 0; i < digits.length; i++) {
      const char = digits[i].toUpperCase();
      let val = 0;
      if (char >= '0' && char <= '9') {
        val = char.charCodeAt(0) - 48;
      } else if (char >= 'A' && char <= 'F') {
        val = char.charCodeAt(0) - 55;
      }
      decimalBig = decimalBig * baseBig + BigInt(val);
    }

    // Convert decimal BigInt to target base
    let convertedStr = '';
    if (decimalBig === 0n) {
      convertedStr = '0';
    } else {
      const targetBig = BigInt(targetBase);
      let temp = decimalBig;
      const chars: string[] = [];
      const hexLookup = '0123456789ABCDEF';

      while (temp > 0n) {
        const rem = Number(temp % targetBig);
        chars.push(hexLookup[rem]);
        temp = temp / targetBig;
      }
      convertedStr = chars.reverse().join('');
    }

    const finalResult = isNegative && decimalBig !== 0n ? `-${convertedStr}` : convertedStr;

    // Optional breakdown for education
    const breakdown: { digit: string; power: number; value: string }[] = [];
    if (digits.length <= 16) {
      for (let i = 0; i < digits.length; i++) {
        const power = digits.length - 1 - i;
        const char = digits[i].toUpperCase();
        breakdown.push({
          digit: char,
          power,
          value: `${char} × ${sourceBase}^${power}`,
        });
      }
    }

    return {
      success: true,
      result: finalResult,
      sourceBase,
      targetBase,
      decimalValue: (isNegative && decimalBig !== 0n ? `-${decimalBig.toString()}` : decimalBig.toString()),
      isNegative,
      digitBreakdown: breakdown,
    };
  } catch (err: unknown) {
    return {
      success: false,
      result: '',
      error: err instanceof Error ? err.message : 'Conversion computation failed.',
      sourceBase,
      targetBase,
    };
  }
}
