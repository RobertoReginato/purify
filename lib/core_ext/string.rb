require 'openssl'

class String
  def secret
    #'R0b&rT03ncryp7s&cr3T2020'
     'robertomombergerreginato'
  end

  def encrypt
    cipher = OpenSSL::Cipher.new('DES-EDE3-CBC').encrypt
    cipher.key = secret
    s = cipher.update(self) + cipher.final

    s.unpack('H*')[0].upcase
  end

  def decrypt
    cipher = OpenSSL::Cipher.new('DES-EDE3-CBC').decrypt
    cipher.key = secret
    s = [self].pack("H*").unpack("C*").pack("c*")

    cipher.update(s) + cipher.final
  end
end