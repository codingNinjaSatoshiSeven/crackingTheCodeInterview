#Write a class TempTracker with these methods:

#solution 1, O(1) time complexity for all the functions, O(k) space compexity, k=111 this case
class TempTracker:
	def __init__(self):
		self.max = float("-inf")
		self.min = float("inf")
		self.size = 0
		self.accumulate = 0.0
		self.count = [0] *(111) #0--- 110 Degree F
		self.max_occurance = 0
		self.mode = None
		self.mean = None
	def insert(self, temperature):
		self.size +=1
		self.accumulate += temperature
		self.mean = self.accumulate/self.size
		if(temperature > self.max):
			self.max = temperature
		if(temperature < self.min):
			self.min = temperature
		self.count[temperature] +=1
		if (self.count[temperature] > self.max_occurance):
			self.mode = temperature
			self.max_occurance = self.count[temperature]
	def get_max(self):
		return self.max
	def get_min(self):
		return self.min
	def get_mean(self):
		return self.mean
	def get_mode(self):
		return self.mode

tempTracker = TempTracker()
tempTracker.insert(1)
tempTracker.insert(34)
tempTracker.insert(1)
tempTracker.insert(34)
tempTracker.insert(100)

print tempTracker.get_min() #1.0
print tempTracker.get_max() #100.0
print tempTracker.get_mean() # 34.0
print tempTracker.get_mode() #1.0

#official solution 
class TempTracker_Soln:

  def __init__(self):

      # for mode
      self.occurrences = [0] * (111) # list of 0s at indices 0..110
      self.max_occurrences = 0
      self.mode = None

      # for mean
      self.total_numbers = 0
      self.total_sum = 0.0 # mean should be float
      self.mean = None

      # for min and max
      self.min_temp = None
      self.max_temp = None

  def insert(self, temperature):

      # for mode
      self.occurrences[temperature] += 1
      if self.occurrences[temperature] > self.max_occurrences:
          self.mode = temperature
          self.max_occurrences = self.occurrences[temperature]

      # for mean
      self.total_numbers += 1
      self.total_sum += temperature
      self.mean = self.total_sum / self.total_numbers

      # for min and max
      if not self.max_temp or temperature > self.max_temp:
          self.max_temp = temperature
      if not self.min_temp or temperature < self.min_temp:
          self.min_temp = temperature

  def get_max(self):
      return self.max_temp

  def get_min(self):
      return self.min_temp

  def get_mean(self):
      return self.mean

  def get_mode(self):
      return self.mode