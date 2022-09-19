var results= persons.GroupBy(n => new { n.PersonId, n.car})
                .Select(g => new {
                               g.Key.PersonId,
                               g.Key.car)}).ToList();