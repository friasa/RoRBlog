class Comment < ApplicationRecord
  include Visible

  belongs_to :post

  validates :commenter, presence: true
  validates :body, presence: true, length: { minimum: 5 }

  VALID_STATUSES = %w[public private archived].freeze

  validates :status, inclusion: { in: VALID_STATUSES }

  def archived?
    status == 'archived'
  end
end
