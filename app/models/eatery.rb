class Eatery < ApplicationRecord
  has_many :menus, dependent: :destroy
end
