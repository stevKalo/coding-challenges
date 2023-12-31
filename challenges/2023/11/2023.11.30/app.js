// Instructions:
// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
// Create a function which translates a given DNA string into RNA.

// Parameters: string of 4 acids DNA

// Return: string of 4 acids in RNA

// Examples:
// "GCAT"  =>  "GCAU"

// Pseudocode:
function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U");
}
