function paginate(query, { page = 1, limit = 10 }) {
  page = Math.max(1, parseInt(page, 10));
  limit = Math.max(1, Math.min(100, parseInt(limit, 10)));
  const skip = (page - 1) * limit;
  return query.skip(skip).limit(limit);
}

module.exports = paginate;
